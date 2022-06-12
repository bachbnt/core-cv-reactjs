import { getDoc, setDoc, doc } from 'firebase/firestore';
import { firestoreCollection, firestoreDocument } from 'src/constants/configs';
import { parseConfig, Config } from 'src/models/config';
import { Contact } from 'src/models/contact';
import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';
import { Message } from 'src/models/message';
import { parseProfile, Profile } from 'src/models/profile';
import { Project } from 'src/models/project';
import { Service as ServiceModel } from 'src/models/service';
import { Skill } from 'src/models/skill';
import { firestore } from './firebase';

class Service {
  async getConfig(): Promise<Config | any> {
    const ref = doc(
      firestore,
      firestoreCollection.config,
      firestoreDocument.config
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const config = parseConfig(data);
    return config;
  }

  async postMessage(message: Message): Promise<void> {
    const ref = doc(
      firestore,
      firestoreCollection.message,
      new Date().toString()
    );
    await setDoc(ref, message);
  }

  async getContact(): Promise<Contact[]> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.contact
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const contactList: Contact[] = Object.values(data as {});
    return contactList;
  }

  async getEducation(): Promise<Education[]> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.education
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const educationList: Education[] = Object.values(data as {});
    return educationList;
  }

  async getExperience(): Promise<Experience[]> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.experience
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const experienceList: Experience[] = Object.values(data as {});
    return experienceList;
  }

  async getProfile(): Promise<Profile | any> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.profile
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const profile = parseProfile(data);
    return profile;
  }

  async getProject(): Promise<Project[]> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.project
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const projectList: Project[] = Object.values(data as {});
    return projectList;
  }

  async getService(): Promise<ServiceModel[]> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.service
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const serviceList: ServiceModel[] = Object.values(data as {});
    return serviceList;
  }

  async getSkill(): Promise<Skill[]> {
    const ref = doc(
      firestore,
      firestoreCollection.user,
      firestoreDocument.skill
    );
    const snapshot = await getDoc(ref);
    const data = snapshot.data();

    const skillList: Skill[] = Object.values(data as {});
    return skillList;
  }
}

export const service = new Service();
