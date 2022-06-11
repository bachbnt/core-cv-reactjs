import { parseProfile, Profile } from 'src/models/profile';
import { Message } from 'src/models/message';
import { firestore } from './firebase';
import { firestoreCollection, firestoreDocument } from 'src/constants/configs';
import { Contact } from 'src/models/contact';
import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';
import { Project } from 'src/models/project';
import { Service as ServiceModel } from 'src/models/service';
import { Skill } from 'src/models/skill';
import { parseConfig, Config } from 'src/models/config';

class Service {
  async getConfig(): Promise<Config> {
    const data = await firestore
      .collection(firestoreCollection.config)
      .doc(firestoreDocument.config)
      .get();
    const config = parseConfig(data);
    return config;
  }

  async postMessage(message: Message): Promise<void> {
    await firestore
      .collection(firestoreCollection.message)
      .doc(new Date().toString())
      .set(message);
  }

  async getContact(): Promise<Contact[]> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.contact)
      .get();

    const contactList: Contact[] = Object.values(data.data() as {});
    return contactList;
  }

  async getEducation(): Promise<Education[]> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.education)
      .get();

    const educationList: Education[] = Object.values(data.data() as {});
    return educationList;
  }

  async getExperience(): Promise<Experience[]> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.experience)
      .get();

    const experienceList: Experience[] = Object.values(data.data() as {});
    return experienceList;
  }

  async getProfile(): Promise<Profile> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.profile)
      .get();

    const profile = parseProfile(data);
    return profile;
  }

  async getProject(): Promise<Project[]> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.project)
      .get();

    const projectList: Project[] = Object.values(data.data() as {});
    return projectList;
  }

  async getService(): Promise<ServiceModel[]> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.service)
      .get();

    const serviceList: ServiceModel[] = Object.values(data.data() as {});
    return serviceList;
  }

  async getSkill(): Promise<Skill[]> {
    const data = await firestore
      .collection(firestoreCollection.user)
      .doc(firestoreDocument.skill)
      .get();
    return Object.values(data.data() as {});
  }
}

export const service = new Service();
