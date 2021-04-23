import { Me } from '../models/me';
import { firestore } from './firebase';

class ApiService {
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
    console.log({ me });
    return me;
  }
}

export const apiService = new ApiService();
