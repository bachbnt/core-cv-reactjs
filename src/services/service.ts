import { FirestoreCollection, FirestoreDocument } from '@core/configs';
import Constant from '@core/constants';
import { Config, parseConfig } from '@models/config';
import { Contact } from '@models/contact';
import { Education } from '@models/education';
import { Experience } from '@models/experience';
import { Message } from '@models/message';
import { Payment } from '@models/payment';
import { parseProfile, Profile } from '@models/profile';
import { Project } from '@models/project';
import { Service as ServiceModel } from '@models/service';
import { Skill } from '@models/skill';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { sortBy } from 'lodash';
import { firestore } from './firebase';
class Service {
  private static instance: Service;
  private constructor() {}
  static getInstance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
    }
    return Service.instance;
  }

  async getLocalization(
    localization: string = Constant.DEFAULT_LANGUAGE
  ): Promise<any> {
    const ref = doc(
      firestore,
      FirestoreCollection.CONFIG,
      FirestoreDocument.LOCALIZATION
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() as any;

    const _localization = data[localization];
    return _localization;
  }

  async getConfig(): Promise<Config | any> {
    const ref = doc(
      firestore,
      FirestoreCollection.CONFIG,
      FirestoreDocument.CONFIG
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

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

  async getContact(): Promise<Contact[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.CONTACT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: Contact[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }

  async getEducation(): Promise<Education[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.EDUCATION
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: Education[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }

  async getExperience(): Promise<Experience[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.EXPERIENCE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: Experience[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }

  async getProfile(): Promise<Profile | any> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PROFILE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const profile = parseProfile(data);
    return profile;
  }

  async getProject(): Promise<Project[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PROJECT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: Project[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }

  async getService(): Promise<ServiceModel[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.SERVICE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: ServiceModel[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }

  async getSkill(): Promise<Skill[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.SKILL
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: Skill[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }

  async getPayment(): Promise<Payment[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PAYMENT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const list: Payment[] = Object.values(data as {});
    return sortBy(list, Constant.SORT_KEY);
  }
}

export const service = Service.getInstance();
