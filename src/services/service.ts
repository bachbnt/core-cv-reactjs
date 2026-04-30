import { FirestoreCollection, FirestoreDocument } from '@core/configs';
import Constant from '@core/constants';
import { Certificate } from '@models/certificate';
import { ChatMessage, ChatProvider } from '@models/chat';
import { Config, parseConfig } from '@models/config';
import { Contact } from '@models/contact';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import { Message } from '@models/message';
import { Payment } from '@models/payment';
import { Profile, parseProfile } from '@models/profile';
import { Project } from '@models/project';
import { Service as ServiceModel } from '@models/service';
import { Skill } from '@models/skill';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import { firestore } from './firebase';
class Service {
  async getLocalization(
    language: string = Constant.DEFAULT_LANGUAGE
  ): Promise<Record<string, any>> {
    const ref = doc(
      firestore,
      FirestoreCollection.CONFIG,
      FirestoreDocument.LOCALIZATION
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const localization = data[language];
    return localization;
  }

  async getConfig(): Promise<Config> {
    const ref = doc(
      firestore,
      FirestoreCollection.CONFIG,
      FirestoreDocument.CONFIG
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const config = parseConfig(data);
    return config;
  }

  async postMessage(message: Message): Promise<void> {
    const ref = doc(
      firestore,
      FirestoreCollection.MESSAGE,
      new Date().toString()
    );
    await setDoc(ref, message);
  }

  private async fetchArrayData<T extends { visible?: boolean }>(
    collection: FirestoreCollection,
    document: FirestoreDocument
  ): Promise<T[]> {
    const ref = doc(firestore, collection, document);
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};
    const list: T[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...(value as any),
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY) as T[];
  }

  async getCertificate(): Promise<Certificate[]> {
    return this.fetchArrayData<Certificate>(
      FirestoreCollection.USER,
      FirestoreDocument.CERTIFICATE
    );
  }

  async getContact(): Promise<Contact[]> {
    return this.fetchArrayData<Contact>(
      FirestoreCollection.USER,
      FirestoreDocument.CONTACT
    );
  }

  async getEducation(): Promise<Education[]> {
    return this.fetchArrayData<Education>(
      FirestoreCollection.USER,
      FirestoreDocument.EDUCATION
    );
  }

  async getExperience(): Promise<Experience[]> {
    return this.fetchArrayData<Experience>(
      FirestoreCollection.USER,
      FirestoreDocument.EXPERIENCE
    );
  }

  async getProfile(): Promise<Profile> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PROFILE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const profile = parseProfile(data);
    return profile;
  }

  async getProject(): Promise<Project[]> {
    return this.fetchArrayData<Project>(
      FirestoreCollection.USER,
      FirestoreDocument.PROJECT
    );
  }

  async getService(): Promise<ServiceModel[]> {
    return this.fetchArrayData<ServiceModel>(
      FirestoreCollection.USER,
      FirestoreDocument.SERVICE
    );
  }

  async getSkill(): Promise<Skill[]> {
    return this.fetchArrayData<Skill>(
      FirestoreCollection.USER,
      FirestoreDocument.SKILL
    );
  }

  async getPayment(): Promise<Payment[]> {
    return this.fetchArrayData<Payment>(
      FirestoreCollection.USER,
      FirestoreDocument.PAYMENT
    );
  }

  private async callGemini(
    messages: ChatMessage[],
    systemPrompt: string,
  ): Promise<string> {
    const apiKey = Constant.GEMINI_API_KEY;
    if (!apiKey) throw new Error('Missing Gemini API key');

    const response = await fetch(`${Constant.GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: messages.map((message) => ({
          role: message.role,
          parts: [{ text: message.content }],
        })),
      }),
    });

    if (response.status === 429) throw new Error('rate_limit');
    if (!response.ok) throw new Error(`Gemini error: ${response.status}`);
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '...';
  }

  private async callOpenAI(
    messages: ChatMessage[],
    systemPrompt: string,
  ): Promise<string> {
    const apiKey = Constant.OPENAI_API_KEY;
    if (!apiKey) throw new Error('Missing OpenAI API key');

    const response = await fetch(Constant.OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: Constant.OPENAI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map((message) => ({
            role: message.role === 'model' ? 'assistant' : 'user',
            content: message.content,
          })),
        ],
      }),
    });

    if (response.status === 429) throw new Error('rate_limit');
    if (!response.ok) throw new Error(`OpenAI error: ${response.status}`);
    const data = await response.json();
    return data.choices?.[0]?.message?.content ?? '...';
  }

  private async callClaude(
    messages: ChatMessage[],
    systemPrompt: string,
  ): Promise<string> {
    const apiKey = Constant.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error('Missing Anthropic API key');

    const response = await fetch(Constant.ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': Constant.ANTHROPIC_VERSION,
      },
      body: JSON.stringify({
        model: Constant.ANTHROPIC_MODEL,
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.map((message) => ({
          role: message.role === 'model' ? 'assistant' : 'user',
          content: message.content,
        })),
      }),
    });

    if (response.status === 429) throw new Error('rate_limit');
    if (!response.ok) throw new Error(`Anthropic error: ${response.status}`);
    const data = await response.json();
    return data.content?.[0]?.text ?? '...';
  }

  async sendChatMessage(
    provider: ChatProvider,
    messages: ChatMessage[],
    systemPrompt: string,
  ): Promise<string> {
    if (provider === 'openai') return this.callOpenAI(messages, systemPrompt);
    if (provider === 'claude') return this.callClaude(messages, systemPrompt);
    return this.callGemini(messages, systemPrompt);
  }

  async postMockData<T>(
    data: Omit<T, 'id'>,
    id: string,
    path: {
      collection: FirestoreCollection;
      document: FirestoreDocument;
    }
  ): Promise<void> {
    const ref = doc(firestore, path.collection, path.document);
    await updateDoc(ref, { [id]: data });
  }
}

export default Service;
