/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import type { ChatMessage } from './schema';

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_MODEL = 'gpt-4o-mini';
const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_MODEL = 'claude-haiku-4-5-20251001';
const ANTHROPIC_VERSION = '2023-06-01';

const ensureKey = (key: string | undefined, providerName: string): string => {
  if (!key) throw new HttpError(500, `Missing ${providerName} API key`);
  return key;
};

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

const handleProviderResponse = async (
  response: Response,
  providerName: string,
): Promise<unknown> => {
  if (response.status === 429) throw new HttpError(429, 'rate_limit');
  if (!response.ok) {
    throw new HttpError(response.status, `${providerName} upstream error`);
  }
  return response.json();
};

export const callGemini = async (
  apiKey: string | undefined,
  messages: ChatMessage[],
  systemPrompt: string,
): Promise<string> => {
  const key = ensureKey(apiKey, 'Gemini');
  const response = await fetch(`${GEMINI_URL}?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
    }),
  });
  const data = (await handleProviderResponse(response, 'Gemini')) as any;
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '...';
};

export const callOpenAI = async (
  apiKey: string | undefined,
  messages: ChatMessage[],
  systemPrompt: string,
): Promise<string> => {
  const key = ensureKey(apiKey, 'OpenAI');
  const response = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.map((m) => ({
          role: m.role === 'model' ? 'assistant' : 'user',
          content: m.content,
        })),
      ],
    }),
  });
  const data = (await handleProviderResponse(response, 'OpenAI')) as any;
  return data?.choices?.[0]?.message?.content ?? '...';
};

export const callClaude = async (
  apiKey: string | undefined,
  messages: ChatMessage[],
  systemPrompt: string,
): Promise<string> => {
  const key = ensureKey(apiKey, 'Anthropic');
  const response = await fetch(ANTHROPIC_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': ANTHROPIC_VERSION,
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role === 'model' ? 'assistant' : 'user',
        content: m.content,
      })),
    }),
  });
  const data = (await handleProviderResponse(response, 'Anthropic')) as any;
  return data?.content?.[0]?.text ?? '...';
};
