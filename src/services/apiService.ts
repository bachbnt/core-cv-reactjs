import { Response } from '../models/response';

class ApiService {
  async getMe(): Promise<Response> {
    const universities = [
      {
        time: 'Sep 2016 - Sep 2020',
        specialty: 'Bachelor of Physics',
        name: 'University of Science',
        description: '',
      },
      {
        time: 'Dec 2020 - Dec 2022',
        specialty: 'Master of Engineering Physics ',
        name: 'University of Science',
        description: '',
      },
    ];
    const companies = [
      {
        time: 'Mar 2020 - Present',
        specialty: 'Mobile Developer',
        name: 'DevBlock Vietnam',
        description: 'Developing mobile applications',
      },
      {
        time: 'Apr 2020 - Present',
        specialty: 'Flutter Developer',
        name: 'Freelancer',
        description: 'Developing mobile applications',
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
    ];
    const projects = [
      {
        name: "Bach's CV",
        technology: 'ReactJS, Firebase',
        summary: 'Personal website',
      },
      {
        name: 'Yoga Lasyn',
        technology: 'Flutter, Firebase',
        summary: ' Yoga video watching application',
      },
      {
        name: 'Weather Live',
        technology: 'Flutter',
        summary: 'Weather forecast application',
      },
      {
        name: 'P&C Dashboard',
        technology: 'React Native',
        summary: 'Internal social network application',
      },
      {
        name: 'Beli Coffee',
        technology: 'Android, NodeJS, MongoDB',
        cover:
          'https://www.membergate.com/members/images/3493a.png?cb=20210226073611',
        summary: 'Coffee ordering application',
      },
    ];
    const services = [
      {
        name: 'App Development',
        description:
          'Developing Android and iOS applications using Flutter or React Native. Be able to work with Native applications with Kotlin and Swift.',
      },
      {
        name: 'Web Development',
        description:
          'Developing website using Flutter or ReactJS. Be able to use HTML and CSS.',
      },
      {
        name: 'Open Source',
        description:
          'Working as open source contributor on GitHub with some forks on various projects by other developers',
      },
      {
        name: 'Programming Teaching',
        description: 'Teaching online programming to students',
      },
      {
        name: 'Blog Writing',
        description: 'Writing technical blogs on my personal website',
      },
    ];
    const contacts = [
      {
        name: 'Ho Chi Minh City, Vietnam',
        type: 'Address',
        url: 'https://www.google.com/maps/place/Ho+Chi+Minh+City/',
      },
      {
        name: 'bachbnt@gmail.com',
        type: 'Email',
        url: 'mailto:bachbnt@gmail.com',
      },
      {
        name: '(+84) 384560623',
        type: 'Phone',
        url: 'tel:0384560623',
      },
    ];
    const socials = [
      {
        name: 'bachbnt',
        type: 'Facebook',
        url: 'https://www.facebook.com/bachbnt',
      },
      {
        name: 'bachbnt',
        type: 'GitHub',
        url: 'https://github.com/bachbnt/',
      },
      {
        name: 'bachbnt',
        type: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bachbnt/',
      },
    ];
    const user = {
      username: 'Bach Bui',
      job: 'Hybrid Developer',
      summary: 'Welcome to my website!',
      avatar: 'https://avatars.githubusercontent.com/u/51219305?v=4',
      cover:
        'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/149434787_1703323786507046_4478961594770359721_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=MxIvDfl0wOYAX9RMJDw&_nc_ht=scontent.fsgn5-7.fna&oh=7896823b7f5a494026295044182a742d&oe=60A64314',
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
