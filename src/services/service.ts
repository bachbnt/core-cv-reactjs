import { fromRawToMe, Me } from 'src/models/me';
import { Message } from 'src/models/message';
import { firestore } from './firebase';

class Service {
  async getMe(): Promise<Me> {
    const raw = await firestore.collection('me').doc('me').get();
    const me = fromRawToMe(raw);
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
