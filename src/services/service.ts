import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FirestoreCollection, FirestoreDocument } from 'src/core/configs';
import { Config, parseConfig } from 'src/models/config';
import { Contact } from 'src/models/contact';
import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';
import { Message } from 'src/models/message';
import { Payment } from 'src/models/payment';
import { parseProfile, Profile } from 'src/models/profile';
import { Project } from 'src/models/project';
import { Service as ServiceModel } from 'src/models/service';
import { Skill } from 'src/models/skill';
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

    const contactList: Contact[] = Object.values(data as {});
    return contactList;
  }

  async getEducation(): Promise<Education[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.EDUCATION
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const educationList: Education[] = Object.values(data as {});
    return educationList;
  }

  async getExperience(): Promise<Experience[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.EXPERIENCE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const experienceList: Experience[] = Object.values(data as {});
    return experienceList;
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

    const projectList: Project[] = Object.values(data as {});
    return projectList;
  }

  async getService(): Promise<ServiceModel[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.SERVICE
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const serviceList: ServiceModel[] = Object.values(data as {});
    return serviceList;
  }

  async getSkill(): Promise<Skill[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.SKILL
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const skillList: Skill[] = Object.values(data as {});
    return skillList;
  }

  async getPayment(): Promise<Payment[]> {
    const ref = doc(
      firestore,
      FirestoreCollection.USER,
      FirestoreDocument.PAYMENT
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const paymentList: Payment[] = Object.values(data as {});
    return paymentList;
  }
}

export const service = Service.getInstance();
