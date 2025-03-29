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
    'Python',
    'C',
    'Data Structure and Algorithms',
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
      title: 'Amazon Sales & Customer Dashboards',
      href: 'https://public.tableau.com/app/profile/parth.sarathi.sharma8678/viz/AmazonSalesCustomerDashboardsDynamic/CustomerDashboard',
      image:
        'https://raw.githubusercontent.com/Parth-Sarathi02/Sales-and-Costumer-Dashboard/refs/heads/main/Costumer%20Dashboard.png',
      dates: 'June 2024',
      active: true,
      description:
        'Developed sales and customer dashboards to analyze sales performance and customer trends, leading to a 25% increase in data processing efficiency.',

      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
    {
      title: 'Netflix Project (Capstone Project)',
      href: 'https://link-to-your-project.com',
      image:
        'https://github.com/Parth-Sarathi02/Netflix-Dashboard/blob/main/Screenshot%202025-03-04%20000832.png?raw=true',
      dates: 'May 2024',
      active: true,
      description:
        'Created a dashboard to analyze movies and TV shows on Netflix, improving user experience by 15% through user feedback analysis.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },

    {
      title: 'HR Dashboard',
      href: 'https://link-to-your-project.com',
      image:
      'https://github.com/Parth-Sarathi02/Netflix-Dashboard/blob/main/Screenshot%202025-03-04%20000832.png?raw=true',
      dates: 'Feb 2025',
      active: true,
      description:
        'Amazon Dashboard for Sales and Customer insights, providing a comprehensive overview of key sales metrics and trends.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },

    {
      title: 'Amazon Dashboard',
      href: 'https://link-to-your-project.com',
      dates: 'Feb 2025',
      active: true,
      description:
        'Amazon Dashboard for Sales and Customer insights, providing a comprehensive overview of key sales metrics and trends.',
      technologies: ['Python', 'Microsoft Excel', 'MySQL', 'Tableau'],
    },
  ],
  certifications: [
    {
      title: 'Data Analysis by Microsoft',
      href: 'https://link-to-certification.com',
      date: 'May 14, 2024',
    },
    {
      title: 'Generative AI by LinkedIn Learning',
      href: 'https://link-to-certification.com',
      date: 'May 10, 2024',
    },
  ],
};
