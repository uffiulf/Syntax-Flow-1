import { TeamMember, Project } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Emma Johansen',
    role: ['Developer', 'Designer'],
    location: 'Oslo, Norway',
    bio: 'Full-stack developer with a passion for creating beautiful and functional web applications. Specializes in React, TypeScript, and modern web technologies.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma', 'UI/UX Design', 'Next.js', 'Tailwind CSS'],
    avatar: 'https://images.unsplash.com/photo-1622475444932-f1b0bf96ecff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0NDU2NzZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    highlights: [
      'Led development of 15+ production web applications',
      'Reduced page load times by 60% through optimization',
      'Mentored 5 junior developers',
    ],
    experience: [
      {
        title: 'Senior Full-Stack Developer',
        company: 'Tech Solutions AS',
        period: '2021 - Present',
      },
      {
        title: 'Frontend Developer',
        company: 'Digital Agency',
        period: '2019 - 2021',
      },
    ],
    education: [
      {
        degree: 'M.Sc. Computer Science',
        institution: 'University of Oslo',
        year: '2019',
      },
    ],
    links: {
      email: 'emma@example.com',
      github: 'https://github.com/emma',
      linkedin: 'https://linkedin.com/in/emma',
    },
    projectIds: ['1', '2', '3'],
  },
  {
    id: '2',
    name: 'Lars Nielsen',
    role: ['DevOps'],
    location: 'Bergen, Norway',
    bio: 'DevOps engineer focused on building scalable infrastructure and streamlining deployment processes. Expert in cloud platforms and containerization.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Python', 'Monitoring'],
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    highlights: [
      'Architected cloud infrastructure serving 1M+ users',
      'Reduced deployment time from hours to minutes',
      'Implemented monitoring systems with 99.9% uptime',
    ],
    experience: [
      {
        title: 'Senior DevOps Engineer',
        company: 'Cloud Systems',
        period: '2020 - Present',
      },
      {
        title: 'Systems Administrator',
        company: 'IT Services',
        period: '2017 - 2020',
      },
    ],
    education: [
      {
        degree: 'B.Sc. Information Technology',
        institution: 'Norwegian University of Science and Technology',
        year: '2017',
      },
    ],
    links: {
      email: 'lars@example.com',
      github: 'https://github.com/lars',
      linkedin: 'https://linkedin.com/in/lars',
    },
    projectIds: ['1', '3', '4'],
  },
  {
    id: '3',
    name: 'Sofia Andersen',
    role: ['Project Manager'],
    location: 'Trondheim, Norway',
    bio: 'Agile project manager with a track record of delivering complex projects on time and within budget. Excellent at stakeholder management and team coordination.',
    skills: ['Agile', 'Scrum', 'Jira', 'Stakeholder Management', 'Product Strategy', 'Risk Management', 'Team Leadership'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    highlights: [
      'Successfully delivered 20+ projects worth €5M+',
      'Improved team velocity by 40% through process optimization',
      'Certified Scrum Master and Product Owner',
    ],
    experience: [
      {
        title: 'Senior Project Manager',
        company: 'Innovation Lab',
        period: '2019 - Present',
      },
      {
        title: 'Product Owner',
        company: 'Startup Hub',
        period: '2016 - 2019',
      },
    ],
    education: [
      {
        degree: 'M.B.A.',
        institution: 'BI Norwegian Business School',
        year: '2016',
      },
    ],
    links: {
      email: 'sofia@example.com',
      linkedin: 'https://linkedin.com/in/sofia',
    },
    projectIds: ['1', '2', '4'],
  },
  {
    id: '4',
    name: 'Oliver Berg',
    role: ['Designer'],
    location: 'Stavanger, Norway',
    bio: 'Creative designer specializing in user experience and interface design. Passionate about creating intuitive and accessible digital products.',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Illustration', 'Branding'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    highlights: [
      'Designed award-winning user interfaces',
      'Established design systems used by 50+ developers',
      'Conducted 100+ user research sessions',
    ],
    experience: [
      {
        title: 'Lead UX/UI Designer',
        company: 'Design Studio',
        period: '2020 - Present',
      },
      {
        title: 'Product Designer',
        company: 'Tech Startup',
        period: '2018 - 2020',
      },
    ],
    education: [
      {
        degree: 'B.A. Interaction Design',
        institution: 'Oslo School of Architecture and Design',
        year: '2018',
      },
    ],
    links: {
      email: 'oliver@example.com',
      website: 'https://oliverberg.design',
      linkedin: 'https://linkedin.com/in/oliver',
    },
    projectIds: ['2', '3', '4'],
  },
  {
    id: '5',
    name: 'Ingrid Hansen',
    role: ['Developer'],
    location: 'Oslo, Norway',
    bio: 'Backend developer with expertise in building robust APIs and microservices. Strong focus on performance, security, and scalability.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Microservices', 'Redis'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    highlights: [
      'Built APIs handling 10M+ requests daily',
      'Improved database query performance by 80%',
      'Contributed to 10+ open-source projects',
    ],
    experience: [
      {
        title: 'Backend Developer',
        company: 'Tech Solutions AS',
        period: '2020 - Present',
      },
      {
        title: 'Junior Developer',
        company: 'Software House',
        period: '2018 - 2020',
      },
    ],
    education: [
      {
        degree: 'B.Sc. Software Engineering',
        institution: 'University of Oslo',
        year: '2018',
      },
    ],
    links: {
      email: 'ingrid@example.com',
      github: 'https://github.com/ingrid',
      linkedin: 'https://linkedin.com/in/ingrid',
    },
    projectIds: ['1', '2'],
  },
  {
    id: '6',
    name: 'Marcus Olsen',
    role: ['Developer', 'DevOps'],
    location: 'Bergen, Norway',
    bio: 'Full-stack developer with DevOps expertise. Enjoys working across the entire technology stack to deliver end-to-end solutions.',
    skills: ['React', 'TypeScript', 'Go', 'Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    highlights: [
      'Automated deployment pipelines for 15+ projects',
      'Reduced infrastructure costs by 35%',
      'Speaker at 3 tech conferences',
    ],
    experience: [
      {
        title: 'Full-Stack Developer',
        company: 'Cloud Systems',
        period: '2019 - Present',
      },
    ],
    education: [
      {
        degree: 'B.Sc. Computer Engineering',
        institution: 'Norwegian University of Science and Technology',
        year: '2019',
      },
    ],
    links: {
      email: 'marcus@example.com',
      github: 'https://github.com/marcus',
      website: 'https://marcus.dev',
    },
    projectIds: ['3', '4'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    summary: 'Modern e-commerce solution with real-time inventory management',
    description: 'A comprehensive e-commerce platform built for a leading Nordic retailer, featuring real-time inventory tracking, multi-currency support, and advanced analytics.',
    goals: [
      'Create a scalable platform to handle 100K+ concurrent users',
      'Implement real-time inventory synchronization across 50+ stores',
      'Provide comprehensive analytics and reporting tools',
      'Ensure GDPR compliance and data security',
    ],
    responsibilities: [
      'Full-stack development using React and Node.js',
      'Database design and optimization',
      'API development and integration with third-party services',
      'DevOps setup with AWS and Docker',
      'UI/UX design and user testing',
    ],
    outcomes: [
      '40% increase in online sales within first quarter',
      '99.9% uptime achieved',
      'Average page load time under 1.5 seconds',
      'Successfully processed 1M+ transactions in first year',
    ],
    tags: ['E-commerce', 'Web', 'Enterprise'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
    teamMemberIds: ['1', '2', '3', '5'],
    coverImage: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTA3MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    ],
    links: {
      demo: 'https://demo.example.com',
    },
  },
  {
    id: '2',
    title: 'Healthcare Portal',
    summary: 'Patient management system with secure data handling',
    description: 'A secure healthcare portal enabling patients to access medical records, book appointments, and communicate with healthcare providers.',
    goals: [
      'Provide secure access to medical records',
      'Streamline appointment booking process',
      'Enable secure patient-doctor communication',
      'Ensure HIPAA and GDPR compliance',
    ],
    responsibilities: [
      'Frontend development with focus on accessibility',
      'Secure API development',
      'Integration with existing healthcare systems',
      'Security auditing and compliance',
      'User research and UX design',
    ],
    outcomes: [
      '50K+ active users in first 6 months',
      'Reduced appointment no-shows by 30%',
      'Achieved full HIPAA compliance',
      '95% user satisfaction rating',
    ],
    tags: ['Healthcare', 'Web', 'Security'],
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Encryption'],
    teamMemberIds: ['1', '3', '4', '5'],
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800',
    ],
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    summary: 'Real-time data visualization platform for business intelligence',
    description: 'A powerful analytics dashboard providing real-time insights into business metrics with customizable widgets and reports.',
    goals: [
      'Create intuitive data visualization tools',
      'Support real-time data streaming',
      'Enable custom report generation',
      'Provide role-based access control',
    ],
    responsibilities: [
      'Frontend development with complex visualizations',
      'Real-time data pipeline setup',
      'Database optimization for analytics queries',
      'Infrastructure scaling and monitoring',
      'Dashboard UI/UX design',
    ],
    outcomes: [
      'Processing 1M+ data points per minute',
      'Reduced report generation time from hours to seconds',
      'Adopted by 100+ teams across organization',
      'Winner of internal innovation award',
    ],
    tags: ['Analytics', 'Dashboard', 'Data'],
    tech: ['React', 'D3.js', 'Python', 'Kafka', 'ClickHouse', 'Kubernetes'],
    teamMemberIds: ['1', '2', '4', '6'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    ],
    links: {
      demo: 'https://analytics.example.com',
      repo: 'https://github.com/example/analytics',
    },
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    summary: 'Secure mobile banking application with biometric authentication',
    description: 'A modern mobile banking application offering secure transactions, budget tracking, and personalized financial insights.',
    goals: [
      'Provide secure and convenient mobile banking',
      'Implement biometric authentication',
      'Offer personal finance management tools',
      'Ensure compliance with banking regulations',
    ],
    responsibilities: [
      'Mobile app development for iOS and Android',
      'Security implementation and testing',
      'Backend API development',
      'Cloud infrastructure setup',
      'User experience design and testing',
    ],
    outcomes: [
      '200K+ downloads in first 3 months',
      'Zero security breaches',
      '4.8/5 star rating on app stores',
      'Reduced customer service calls by 25%',
    ],
    tags: ['Mobile', 'Finance', 'Security'],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Biometrics', 'Encryption'],
    teamMemberIds: ['2', '3', '4', '6'],
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1080',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    ],
  },
];
