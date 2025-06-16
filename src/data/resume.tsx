import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Parth Sarathi Sharma',
  initials: '',
  url: 'https://parthsarathi.vercel.app',
  location: 'Jaipur, IN',
  locationLink: 'https://www.google.com/maps/place/jaipur',
  description:
    'I am a Microsoft certified Data Analyst with proficiency in data visualization, statistical analysis, real-time analysis, and SQL.',
  summary:
    'I am a Microsoft certified Data Analyst with a focus on uncovering insights to drive strategic decisions and improve business outcomes. Currently pursuing my B.Tech in Computer Science and Engineering at Swami Keshwanand Institute of Technology, Jaipur.',
  avatarUrl: '/me.jpg',
  skills: [
    'C++',
    'Python',
    'C',
    'Data Structure and Algorithms',
    'AI',
    'ML',
    'HTML',
    'CSS',
    'Bootstrap',
    'Figma',
    'MySQL',
    'Microsoft Excel',
    'Tableau',
    'Data Visualization',
    'Data Cleaning',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],

  contact: [
    {
      label: 'Email',
      href: 'mailto:parth.ss0205@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/parth-sarathi-sharma-76aba4283/',
    },
    {
      label: 'Github',
      href: 'https://github.com/Parth-Sarathi02',
    },
  ],
  work: [
    {
 company: 'Pratham Software',
      href: 'https://www.thepsi.com/',
      location: 'Jaipur',
      title: 'Data Analyst Intern',
      // logoUrl: '/soumya-it-solution-logo.png', // Update with the correct logo
      start: 'May 2025',
      end: 'Present',
      description:
        'Working as a Data Analyst Intern at Prattham Software, where I developed interactive Tableau dashboards, performed data cleaning and analysis using Excel and SQL, and delivered insights to support business decisions. Focused on visualizing key metrics, automating reports, and enabling data-driven strategies.',
    },
    
    {
      company: 'Soumya IT Solution',
      href: 'https://www.linkedin.com/company/soumya-it-solution/',
      location: 'Remote',
      title: 'Data Analyst Trainee',
      // logoUrl: '/soumya-it-solution-logo.png', // Update with the correct logo
      start: 'July 2024',
      end: 'September 2024',
      description:
        'Worked on industrial tools like MySQL and Tableau. Consolidated large datasets using advanced Excel and SQL techniques, eliminating data redundancy. Collaborated with systems analysts, engineers, and programmers to understand limitations and resolve software problems.',
    },
    
     
    // Add other work experiences if needed
  ],
  education: [
    {
      school: 'Swami Keshwanand Institute of Technology, Jaipur',
      href: 'https://www.skit.ac.in/',
      degree: 'B.Tech in Computer Science and Engineering (IOT)',
      start: 'November 2022',
      end: 'Present',
    },
    {
      school: "St. Teresa's Sr. Sec. School",
      href: '',
      degree: 'Senior Secondary (CBSE)',
      start: 'May 2022',
      end: 'June 2020',
    },
    {
      school: "St. Teresa's Sr. Sec. School",
      href: '',
      degree: 'Secondary (CBSE)',
      start: 'June 2020',
      end: 'May 2022',
    },
  ],
  projects: [
     {
      title: 'HR Attrition Analysis',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/HRAttritionAnalysis_17497584699790/Overview',
      image:'https://github.com/Parth-Sarathi02/HR-Attrition-Analysis/blob/23572755433f5312b542886b660aa83d3b74c9dc/Screenshot%202025-06-16%20131027.png?raw=true',
      dates: 'June 2025',
      active: true,
      description:
        'Created an interactive Tableau dashboard to analyze employee attrition, job satisfaction, salary hikes, promotions, and departmental trends, enabling data-driven insights for improving workforce planning and retention strategies.',

      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
     {
      title: 'SuperStore Dashboard',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/SuperStoreDashboard_17492904142290/SuperStoreDashboard',
      image:'https://github.com/Parth-Sarathi02/SuperStore-Dashboard/blob/7a30d05efb6f75986d6bb733a93da1ddc25c14ac/Screenshot%202025-06-16%20121659.png?raw=true',
      dates: 'May 2025',
      active: true,
      description:
'created an interactive view of sales performance and key business metrics for a fictional retail company, based on the Superstore dataset. It enables stakeholders to quickly analyze and monitor regional sales, profits and product performance.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
    {
      title: 'Amazon Sales & Customer Dashboards',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/AmazonSalesCustomerDashboardsDynamic/CustomerDashboard',
      image:
        'https://github.com/Parth-Sarathi02/Amazon-Dashboard/blob/main/Screenshot%202025-03-03%20235114.png?raw=true',
      dates: 'Feb 2025',
      active: true,
      description:
        'Developed sales and customer dashboards to analyze sales performance and customer trends, leading to a 25% increase in data processing efficiency.',

      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
    {
      title: 'Netflix Project (Capstone Project)',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/Netflixproject_17210701821940/Dashboard1',
      image:
        'https://github.com/Parth-Sarathi02/Netflix-Dashboard/blob/main/Screenshot%202025-03-04%20000832.png?raw=true',
      dates: 'Sept 2024',
      active: true,
      description:
        'Created a dashboard to analyze movies and TV shows on Netflix, improving user experience by 15% through user feedback analysis.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
    {
      title: 'HR Dashboard',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/HRDashboard_17412456484930/HRSummary',
      image:
        'https://github.com/Parth-Sarathi02/Netflix-Dashboard/blob/main/Screenshot%202025-03-04%20000832.png?raw=true',
      dates: 'May 2024',
      active: true,
      description:
        'Amazon Dashboard for Sales and Customer insights, providing a comprehensive overview of key sales metrics and trends.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
    {
      title: 'Sales and Customer Dashboard',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/SalesCustomerDashboardsProject_17209829830710/CustomerDashboard',
      image:
        'https://github.com/Parth-Sarathi02/Sales-and-Costumer-Dashboard/blob/main/Sales%20Dashboard.png?raw=true',
      dates: 'Mar 2024',
      active: true,
      description:
        'Developed sales and customer dashboards to analyze sales performance and customer trends, leading to a 25% increase in data processing efficiency.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
    {
      title: 'Sales Dashboard',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/SalesDashboard_17209825667380/SalesDashboard',
      image:
        'https://github.com/Parth-Sarathi02/Sales-and-Costumer-Dashboard/blob/main/Sales%20Dashboard.png?raw=true',
      dates: 'Mar 2024',
      active: true,
      description:
        'Developed sales and customer dashboards to analyze sales performance and customer trends, leading to a 25% increase in data processing efficiency.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
  ],
  certifications: [
    {
      title: 'Data Analysis by Microsoft',
      href: 'https://drive.google.com/file/d/1kAVaVQ6nrpl8gIgiNOyqIhRcwZUdVxSR/view?usp=drive_link',
      date: 'May 14, 2024',
    },
    {
      title: 'Generative AI by LinkedIn Learning',
      href: 'https://drive.google.com/file/d/1gDtMXt5d1yTffoECoE1fi66cLIRmmYQa/view?usp=drive_link',
      date: 'May 10, 2024',
    },
  ],
};
