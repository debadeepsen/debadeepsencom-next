export const DELIMITER = ';'

export const skills = [
  'html5',
  'css3',
  'javascript;JavaScript',
  'csharp;C#',
  'nodejs;Node.JS',
  'vuejs;Vue',
  'react;React',
  'angularjs;Angular',
  'nextjs;NextJS',
  'nuxtjs;NuxtJS',
  'php',
  'mysql;MySQL',
  'bootstrap;Bootstrap',
  'tailwindcss;Tailwind',
  'git;Git'
]

export const getSvg = (skill: string) => {
  const key = skill === 'tailwindcss' ? 'plain' : 'original'
  const src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-${key}.svg`
  return src
}
