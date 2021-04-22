import { Response } from '../models/response';

class ApiService {
  async getMe(): Promise<Response> {
    const universities = [
      {
        time: 'Sep 2016 - Sep 2020',
        specialty: 'Bachelor of Physics',
        name: 'University of Science',
      },
      {
        time: 'Dec 2020 - Dec 2022',
        specialty: 'Master of Engineering Physics ',
        name: 'University of Science',
      },
    ];
    const companies = [
      {
        time: 'Mar 2020 - Present',
        specialty: 'Hybrid/ Frontend Developer',
        name: 'DevBlock Vietnam',
        description: 'Developing applications and websites.',
      },
      {
        time: 'Apr 2020 - Present',
        specialty: 'Fullstack Developer',
        name: 'Freelancer',
        description: 'Developing applications and websites.',
      },
    ];
    const technologies = [
      {
        name: 'Flutter',
        url: 'https://flutter.dev/',
      },
      {
        name: 'ReactJS',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React Native',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'NodeJS',
        url: 'https://nodejs.org/',
      },
      {
        name: 'MongoDB',
        url: 'https://www.mongodb.com/',
      },
      {
        name: 'Firebase',
        url: 'https://firebase.google.com/',
      },
    ];
    const projects = [
      {
        name: "Bach's Web",
        technology: 'ReactJS, Firebase',
        summary: 'Personal website.',
      },
      {
        name: 'Yoga Lasyn',
        technology: 'Flutter, Firebase',
        summary: ' Yoga video watching application.',
      },
      {
        name: 'Weather Live',
        technology: 'Flutter',
        summary: 'Weather forecast application.',
      },
      {
        name: 'P&C Dashboard',
        technology: 'React Native',
        summary: 'Internal social network application.',
      },
      {
        name: 'Beli Coffee',
        technology: 'Android, NodeJS, MongoDB',
        cover:
          'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
        summary: 'Coffee ordering application.',
      },
    ];
    const services = [
      {
        name: 'App Development',
        description:
          'Developing Android and iOS applications using Flutter or React Native. Be able to work with Native applications using Kotlin or Swift.',
      },
      {
        name: 'Web Development',
        description:
          'Developing websites using Flutter or ReactJS. Be able to use HTML and CSS.',
      },
      {
        name: 'Open Source',
        description:
          'Working as an open source contributor on GitHub with some forks on various projects by other developers.',
      },
      {
        name: 'Programming Teaching',
        description: 'Teaching online programming to students.',
      },
      {
        name: 'Blog Writing',
        description: 'Writing technical blogs on my personal website.',
      },
    ];
    const contacts = [
      {
        name: 'Ho Chi Minh City, Vietnam',
        url: 'https://www.google.com/maps/place/Ho+Chi+Minh+City/',
      },
      {
        name: '(+84) 384560623',
        url: 'tel:0384560623',
      },
      {
        name: 'bachbnt@gmail.com',
        url: 'mailto:bachbnt@gmail.com',
      },
    ];
    const socials = [
      {
        name: 'bachbnt',
        url: 'https://www.facebook.com/bachbnt/',
      },
      {
        name: 'bachbnt',
        url: 'https://github.com/bachbnt/',
      },
      {
        name: 'bachbnt',
        url: 'https://www.linkedin.com/in/bachbnt/',
      },
    ];
    const user = {
      username: 'Bach Bui',
      jobs: ['Fullstack Developer', 'Technical Blogger'],
      avatar: 'https://avatars.githubusercontent.com/u/51219305?v=4',
      covers: [
        'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/149434787_1703323786507046_4478961594770359721_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=MxIvDfl0wOYAX9RMJDw&_nc_ht=scontent.fsgn5-7.fna&oh=7896823b7f5a494026295044182a742d&oe=60A64314',
        'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/128065463_1647093865463372_1647521075605416364_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=19026a&_nc_ohc=2Ajb4uBafmEAX_OigrC&_nc_oc=AQlbgvLW-M7Ja3QkXLryPMGx17qhJAzjZl0Ebj4YEW-yDR67FTacLQpLCngeuTEON8A&_nc_ht=scontent.fvca1-2.fna&oh=d5f60c3be27d8f56dddb7fac28910cfe&oe=60A61B4B',
        'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/82250698_1354624784710283_3323354228021264384_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=19026a&_nc_ohc=tSAsQ-XLMwAAX8cga9R&_nc_ht=scontent.fvca1-2.fna&oh=9182053e08642241ed136b673172acd2&oe=60A5FA36',
      ],
      description:
        'My background is the Master in Engineering Physics. Because of the passion for programming, I chose Software Engineer as my profession. With knowledge and experience of technologies, I want to become a Project Manager in the future.',
      cv: 'https://www.topcv.vn/xem-cv/a20f691bdb835120d5500ce765ed8e54',
      universities: universities,
      companies: companies,
      technologies: technologies,
      projects: projects,
      services: services,
      contacts: contacts,
      socials: socials,
    };
    return {
      status: 200,
      data: user,
    };
  }
}

export const apiService = new ApiService();
