export interface Company {
  name: string;
  logo: string;
  duration: string;
  companySummaryItems: string[];
  skills: string[];
}

export interface CompanyData {
  [key: string]: Company;
}

const companyData: CompanyData = {
  investing: {
    name: 'Investing.com',
    logo: '/investing.jpeg',
    duration: '2023-2024',
    companySummaryItems: [
      'Maintained WarrenAI Chatbot project',
      'Created responsive pages and components for web application side and Warren Mobile webView side of the Chatbot',
    ],
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'Git'],
  },
  radity: {
    name: 'Radity',
    logo: '/radity.jpeg',
    duration: '2022-2023',
    companySummaryItems: [
      'Drove development for multiple projects on the Insurance Portal',
      'Designed and implemented a dynamic Dashboard system for daily and monthlysystem summaries',
      `Executed the integration of a Location Search system using Mapbox-gl and
      Socotra configs- Drove development for multiple projects on the Insurance
      Portal. - Designed and implemented a dynamic Dashboard system for daily
      and monthly system summaries. - Executed the integration of a Location
      Search system using Mapbox-gl and Socotra configs`,
    ],
    skills: ['React', 'TypeScript', 'JavaScript', 'Material UI', 'Git'],
  },
  reybex: {
    name: 'Reybex',
    logo: '/reybex.jpeg',
    duration: '2020-2022',
    companySummaryItems: [
      'Contributed to four key projects, including reybex ERP, reybex B2B Marketplace, B2B Admin, and User Management System, all built with Vue.js.',
      'Developed features for reybex Mobile app and Sales Person app using React Native.',
      'Propelled project success through 640+ Merge Requests, encompassing both web and mobile applications across six reybex projects.',
    ],
    skills: ['Vue', 'React Native', 'Nuxt', 'JavaScript', 'Vuetify', 'Git'],
  },
  uncia: {
    name: 'Uncia Software',
    logo: '/uncia.jpeg',
    duration: 'Freelance',
    companySummaryItems: [
      'Built an SPA system and Developed a complete Shipping system as a freelancer.',
    ],
    skills: ['Vue', 'JavaScript', 'Vuetify', 'Project Architecture', 'Git'],
  },
};

export default companyData;
