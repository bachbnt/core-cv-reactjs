/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { applicationDefault, cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const root = process.cwd();
const isDryRun = process.argv.includes('--dry-run');

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));

const assertFileExists = async (path, envName) => {
  try {
    await access(path);
  } catch {
    throw new Error(
      `${envName} points to a missing file: ${path}. Update .env with the full path to your Firebase service account JSON.`,
    );
  }
};

const parseServiceAccount = (raw) => {
  const data = JSON.parse(raw);
  if (typeof data.private_key === 'string') {
    data.private_key = data.private_key.replace(/\\n/g, '\n');
  }
  return data;
};

const readEnv = async (path) => {
  const values = {};
  let content = '';
  try {
    content = await readFile(path, 'utf8');
  } catch {
    return values;
  }

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    values[key] = rawValue.replace(/^['"]|['"]$/g, '');
  }
  return values;
};

const env = {
  ...(await readEnv(resolve(root, '.env'))),
  ...process.env,
};

const patchPath = resolve(root, 'src/data/localization-patch.json');
const patch = await readJson(patchPath);

if (isDryRun) {
  console.log(
    `Dry run OK: ${Object.keys(patch).join(', ')} localization patch from ${patchPath}`,
  );
  process.exit(0);
}

let serviceAccount;
if (env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
  serviceAccount = parseServiceAccount(
    Buffer.from(env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf8'),
  );
} else if (env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = parseServiceAccount(env.FIREBASE_SERVICE_ACCOUNT);
} else if (env.GOOGLE_APPLICATION_CREDENTIALS) {
  const credentialsPath = resolve(root, env.GOOGLE_APPLICATION_CREDENTIALS);
  await assertFileExists(credentialsPath, 'GOOGLE_APPLICATION_CREDENTIALS');
  serviceAccount = await readJson(credentialsPath);
}

const projectId =
  env.FIREBASE_PROJECT_ID ??
  env.VITE_FIREBASE_PROJECT_ID ??
  serviceAccount?.project_id;

const app = initializeApp({
  credential: serviceAccount ? cert(serviceAccount) : applicationDefault(),
  projectId,
});
const firestore = getFirestore(app);

await firestore.collection('config').doc('localization').set(patch, {
  merge: true,
});

console.log(`Merged ${patchPath} into Firestore config/localization`);
