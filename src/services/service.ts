import { FirestoreCollection, FirestoreDocument } from '@core/configs';
import Constant from '@core/constants';
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
import { doc, getDoc, setDoc } from 'firebase/firestore';
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

  async getContact(): Promise<Contact[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.CONTACT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: Contact[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
  }

  async getEducation(): Promise<Education[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.EDUCATION
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: Education[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
  }

  async getExperience(): Promise<Experience[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.EXPERIENCE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: Experience[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
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
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PROJECT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: Project[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
  }

  async getService(): Promise<ServiceModel[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.SERVICE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: ServiceModel[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
  }

  async getSkill(): Promise<Skill[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.SKILL
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: Skill[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
  }

  async getPayment(): Promise<Payment[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PAYMENT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data() || {};

    const list: Payment[] = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return sortBy(filter(list, { visible: true }), Constant.SORT_KEY);
  }
}

export default Service;
