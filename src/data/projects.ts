export interface Project {
  title: string
  description: string
  features: string[]
  tech: string[]
  tags: string[]
  demoUrl: string | null
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Employee Management System',
    description:
      'A full-stack application to manage employee records, attendance, payroll, leave management, and authentication.',
    features: [
      'JWT Authentication',
      'Role Based Access',
      'REST APIs',
      'CRUD Operations',
      'Responsive Dashboard',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker', 'Jenkins'],
    tags: ['react', 'node'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Hotel Booking Management System',
    description:
      'A responsive hotel booking platform with user authentication, booking management, and admin dashboard.',
    features: [],
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Terraform'],
    tags: ['react', 'node'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Spring Boot REST API',
    description:
      'REST API built using Java Spring Boot implementing CRUD operations with MySQL and layered architecture.',
    features: [],
    tech: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Maven'],
    tags: ['java'],
    demoUrl: null,
    repoUrl: '#',
  },
]

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'node' },
  { label: 'Java', value: 'java' },
]
