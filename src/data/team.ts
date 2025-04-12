
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "Chief Executive Officer",
    department: "Executive",
    bio: "Alex has over 15 years of experience in the tech industry and has been leading our company since its founding in 2018. With a background in computer science and business administration, Alex brings a unique blend of technical expertise and business acumen to the team.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "2",
    name: "Jordan Taylor",
    role: "Chief Technology Officer",
    department: "Engineering",
    bio: "Jordan oversees all technical aspects of the company. With a PhD in Computer Science and previous experience at major tech companies, Jordan ensures our engineering teams are building innovative solutions that meet our customers' needs.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "3",
    name: "Casey Rivera",
    role: "Head of Product",
    department: "Product",
    bio: "Casey leads our product strategy and roadmap. With a background in UX design and product management, Casey is passionate about creating intuitive and impactful products that solve real problems for our users.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "4",
    name: "Morgan Chen",
    role: "Engineering Manager",
    department: "Engineering",
    bio: "Morgan leads our engineering team, ensuring we deliver high-quality software on schedule. With expertise in architecture design and team leadership, Morgan creates an environment where engineers can do their best work.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "5",
    name: "Taylor Johnson",
    role: "Senior Designer",
    department: "Design",
    bio: "Taylor creates beautiful and functional designs for our products. With a background in graphic design and user experience, Taylor ensures our products not only look great but also provide an excellent user experience.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "6",
    name: "Riley Martinez",
    role: "Marketing Director",
    department: "Marketing",
    bio: "Riley leads our marketing efforts, from brand strategy to campaign execution. With a data-driven approach to marketing, Riley ensures our message reaches the right audience at the right time.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "7",
    name: "Quinn Williams",
    role: "Senior Developer",
    department: "Engineering",
    bio: "Quinn is a senior developer with expertise in frontend technologies. As one of our earliest employees, Quinn has been instrumental in building our core products and mentoring junior developers.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "8",
    name: "Avery Thompson",
    role: "HR Manager",
    department: "Human Resources",
    bio: "Avery oversees all aspects of human resources, from recruitment to employee development. With a focus on creating a positive company culture, Avery ensures we attract and retain top talent.",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export const getTeamByDepartment = (department: string): TeamMember[] => {
  return teamMembers.filter(member => member.department === department);
};

export const getDepartments = (): string[] => {
  const departments = teamMembers.map(member => member.department);
  return [...new Set(departments)];
};
