import { Me } from '../models/me';
import { Message } from '../models/message';
import { firestore } from './firebase';

class Service {
  async getMe(): Promise<Me> {
    const raw = await firestore.collection('me').doc('me').get();
    const me: Me = {
      name: raw.get('name'),
      jobs: raw.get('jobs'),
      avatar: raw.get('avatar'),
      covers: raw.get('covers'),
      description: raw.get('description'),
      cv: raw.get('cv'),
      universities: raw.get('universities'),
      companies: raw.get('companies'),
      technologies: raw.get('technologies'),
      projects: raw.get('projects'),
      services: raw.get('services'),
      contacts: raw.get('contacts'),
      socials: raw.get('socials'),
    };
    return me;
  }

  async postMessage(message: Message): Promise<void> {
    await firestore
      .collection('messages')
      .doc(new Date().toString())
      .set(message);
  }
}

export const service = new Service();
