export type ProjectType = {
  id: Number
  title: string
  description: string
  website?: string
  code?: string
  note?: string
  tech?: string[]
  icon?: string
}

const projects:ProjectType[] = [
  {
    id: 1,
    title: 'Word guessing game',
    description:
      'A Hangman-like word game which lets you guess a word, letter by letter.',
    website: 'https://wordgame.softwarecradle.com/',
    code: 'https://github.com/debadeepsen/vuewordgame/',
    note: 'Listed on the official VueJS Github',
    tech: ['VueJS', 'HTML5', 'Node.JS', 'PHP'],
    icon: 'fas fa-book'
  },
  {
    id: 2,
    title: 'Demo job portal',
    description:
      'A replication of some of the features offered by popular job search websites like Indeed, Monster, and others.',
    website: 'https://skillpeek.softwarecradle.com/',
    tech: ['React', 'HTML5', 'Node.JS'],
    icon: 'fas fa-briefcase'
  },
  {
    id: 3,
    title: 'A food ordering app',
    description:
      'A mobile app that imitates features found in popular food delivery apps.',
    code: 'https://github.com/debadeepsen/foodorder',
    tech: ['VueJS', 'HTML5'],
    icon: 'fa-pizza-slice'
  },
  {
    id: 4,
    title: 'Vue Chess Game',
    description: 'A chess game playable against 3 levels of AI opponent.',
    website: 'https://chess.softwarecradle.com/',
    code: 'https://github.com/debadeepsen/vue-chess/',
    tech: ['VueJS', 'HTML5'],
    icon: 'fa-chess'
  },
  {
    id: 5,
    title: 'Internationalized E-commerce Site',
    description:
      'An e-commerce portal that allows the user to switch languages between English and French. Uses the nuxt-i18n package.',
    website: 'https://github.com/debadeepsen/nuxt-i18n-ecommerce-demo/',
    tech: ['NuxtJS', 'HTML5'],
    icon: 'fa-shopping-cart'
  }
]

export default projects
