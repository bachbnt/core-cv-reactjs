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
        summary:
          ' Yoga video watching application dfdsafdsfsd asdfasdfsdfsdfsd asdfsadfsdfds adsfsadfdfasdf dfd',
      },
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
        description:
          'fdsafdsaf fdfsdfds fdsfdsaafsduifd sifdsufbdfb vdsvdvdvvvvadva vsdvsdvdsvsv vdasvsvdvads vdsdasvv sadvds vdsv vsvdv sdvs vdvvd vsd vsvvd',
      },
      {
        name: 'Web Development',
        description:
          'fdsafdsaf fdfsdf dsfdsfdsaafsd uifdsifdsufbdfbvd svdvdvvvvadvav sdvsdvds vsvvdasvsvd vadsvdsdasv',
      },
      {
        name: 'App Development',
        description:
          'fdsa fdsaff dfsdfdsfdsfd saafsduifdsif dsufbdfbvdsvdvdvvv vadvavsdvsdv dsvs vvdas vsvd vads vdsda sv',
      },
      {
        name: 'Web Development',
        description:
          'fdsafdsa ffdfs dfdsfds fdsaafs duif dsifdsu fbdfbv dsvdvdvv vvad vavsdvsdv dsvsvvd asvsvdvads vdsd asv',
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
      job: 'React Developer',
      summary: 'Welcome to my website!',
      avatar: 'https://avatars.githubusercontent.com/u/51219305?v=4',
      cover: 'https://avatars.githubusercontent.com/u/51219305?v=4',
      description:
        'My background is the Master in Engineering Physics. Because of the passion for coding, I decided to chose Software Engineer as my profession. With knowledge and skills of technology, I want to become a Project Manager in the future.',
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
