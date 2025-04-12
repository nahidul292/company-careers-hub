
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  featured: boolean;
  datePosted: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    description: "We are looking for a Senior Frontend Developer to join our Engineering team. In this role, you will be responsible for developing and implementing user interface components using React.js and related technologies.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across various devices",
      "Collaborate with cross-functional teams to define, design, and ship new features"
    ],
    requirements: [
      "5+ years of experience with frontend development",
      "3+ years of experience with React.js",
      "Proficient in JavaScript, HTML, CSS, and related web technologies",
      "Experience with responsive design and cross-browser compatibility",
      "Excellent problem-solving skills and attention to detail",
      "Strong communication and teamwork skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development stipend",
      "Home office stipend"
    ],
    featured: true,
    datePosted: "2023-04-01"
  },
  {
    id: "2",
    title: "Backend Developer",
    department: "Engineering",
    location: "Hybrid",
    employmentType: "Full-time",
    description: "We are seeking a talented Backend Developer to join our growing team. As a Backend Developer, you will be responsible for server-side application logic and integration of frontend components.",
    responsibilities: [
      "Design and implement robust and scalable APIs",
      "Develop and maintain database schemas and queries",
      "Implement security and data protection measures",
      "Optimize backend performance and response times",
      "Collaborate with frontend developers to integrate user-facing elements"
    ],
    requirements: [
      "3+ years of experience in backend development",
      "Proficiency in Node.js, Express, and/or other backend frameworks",
      "Experience with relational databases and ORM libraries",
      "Understanding of RESTful APIs and microservices architecture",
      "Knowledge of security compliance and data protection best practices"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development stipend",
      "Home office stipend"
    ],
    featured: false,
    datePosted: "2023-04-10"
  },
  {
    id: "3",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    employmentType: "Full-time",
    description: "We're looking for a Product Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI/UX skills, and be able to translate high-level requirements into interaction flows and artifacts.",
    responsibilities: [
      "Create user flows, wireframes, prototypes, and high-fidelity designs",
      "Collaborate with product managers and developers to implement designs",
      "Conduct user research and usability testing",
      "Design and iterate on user interfaces and experiences",
      "Establish design guidelines, best practices, and standards"
    ],
    requirements: [
      "3+ years of experience in product design",
      "Strong portfolio demonstrating UI/UX skills",
      "Proficiency in design tools like Figma, Sketch, etc.",
      "Excellent visual design skills with sensitivity to user interaction",
      "Ability to work iteratively and incorporate feedback effectively"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development stipend",
      "Home office stipend"
    ],
    featured: true,
    datePosted: "2023-04-05"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "On-site",
    employmentType: "Full-time",
    description: "We are seeking a DevOps Engineer who will play a key role in building and maintaining our cloud infrastructure. The successful candidate will be responsible for deployment, configuration, maintenance, and ongoing operations.",
    responsibilities: [
      "Design, build, and maintain CI/CD pipelines",
      "Implement and manage cloud infrastructure",
      "Automate deployment processes and operations tasks",
      "Monitor system performance and optimize resources",
      "Collaborate with development teams to improve delivery workflows"
    ],
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Proficient with AWS, Azure, or GCP",
      "Experience with containerization and orchestration tools (Docker, Kubernetes)",
      "Familiarity with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong scripting and automation skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development stipend",
      "Home office stipend"
    ],
    featured: false,
    datePosted: "2023-04-15"
  },
  {
    id: "5",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    employmentType: "Full-time",
    description: "We are looking for a Marketing Manager to lead our marketing initiatives. The ideal candidate will have experience in digital marketing, campaign management, and brand development.",
    responsibilities: [
      "Develop and implement marketing strategies",
      "Manage digital marketing campaigns across various channels",
      "Create content for website, social media, and marketing materials",
      "Analyze campaign performance and optimize marketing efforts",
      "Collaborate with design and product teams on brand initiatives"
    ],
    requirements: [
      "4+ years of experience in marketing",
      "Strong understanding of digital marketing channels",
      "Experience with marketing analytics and tools",
      "Excellent writing and communication skills",
      "Creative thinking and problem-solving abilities"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development stipend",
      "Home office stipend"
    ],
    featured: false,
    datePosted: "2023-04-20"
  }
];

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};

export const getFeaturedJobs = (): Job[] => {
  return jobs.filter(job => job.featured);
};

export const getDepartments = (): string[] => {
  const departments = jobs.map(job => job.department);
  return [...new Set(departments)];
};

export const getLocations = (): string[] => {
  const locations = jobs.map(job => job.location);
  return [...new Set(locations)];
};

export const getEmploymentTypes = (): string[] => {
  const types = jobs.map(job => job.employmentType);
  return [...new Set(types)];
};
