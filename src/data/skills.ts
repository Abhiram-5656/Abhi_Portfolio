export interface SkillGroup {
  category: string
  items: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    items: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'Python', level: 72 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 85 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'Tailwind', level: 86 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 84 },
      { name: 'Express.js', level: 82 },
      { name: 'Spring Boot', level: 80 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 74 },
      { name: 'Jenkins', level: 68 },
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'IntelliJ IDEA', level: 82 },
      { name: 'Eclipse', level: 70 },
    ],
  },
]
