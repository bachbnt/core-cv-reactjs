import { Response } from '../models/response';

class ApiService {
  async getMe(): Promise<Response> {
    const universities = [
      {
        time: 'Sep 2016 - Sep 2020',
        degree: 'Bachelor of Physics',
        name: 'University of Science',
        description: '',
      },
      {
        time: 'Dec 2020 - Dec 2022',
        degree: 'Master of Engineering Physics ',
        name: 'University of Science',
        description: '',
      },
    ];
    const companies = [
      {
        time: 'Mar 2020 - Present',
        position: 'Mobile Developer',
        name: 'DevBlock Vietnam',
        description: 'Developing mobile applications',
      },
      {
        time: 'Apr 2020 - Present',
        position: 'Flutter Developer',
        name: 'Freelancer',
        description: 'Developing mobile applications',
      },
    ];
    const technologies = [
      {
        name: 'Flutter',
      },
      {
        name: 'ReactJS',
      },
      {
        name: 'React Native',
      },
      {
        name: 'NodeJS',
      },
    ];
    const projects = [
      {
        name: "Bach's CV",
        technology: 'ReactJS',
        cover:
          'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
        summary: 'Personal website',
      },
      {
        name: 'Yoga Lasyn',
        technology: 'Flutter',
        cover:
          'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
        summary: ' Yoga video watching application',
      },
    ];
    const services = [
      {
        name: 'App Development',
        description: '',
      },
      {
        name: 'Web Development',
        description: '',
      },
    ];
    const contacts = [
      {
        name: 'bachbnt@gmail.com',
        url: 'mailto:bachbnt@gmail.com',
      },
      {
        name: '0384560623',
        url: 'tel:0384560623',
      },
      {
        name: 'bachbnt',
        url: 'https://www.facebook.com/bachbnt',
      },
      {
        name: 'bachbnt',
        url: 'https://github.com/bachbnt',
      },
    ];
    const user = {
      username: 'Bach Bui',
      job: 'Fullstack Developer',
      summary: 'none',
      avatar: 'https://avatars.githubusercontent.com/u/51219305?v=4',
      description: 'none',
      cv: 'https://avatars.githubusercontent.com/u/51219305?v=4',
      universities: universities,
      companies: companies,
      technologies: technologies,
      projects: projects,
      services: services,
      contacts: contacts,
    };
    return {
      status: 200,
      data: user,
    };
  }
}

export const apiService = new ApiService();
