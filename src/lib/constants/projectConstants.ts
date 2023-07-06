export type ProjectType = {
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
    title: 'My Personal Website',
    description:
      'The very website you\'re on right now. Made with NextJS.',
    website: 'https://debadeepsen.com/',
    code: 'https://github.com/debadeepsen/debadeepsencom-next/',
    tech: ['nextjs', 'html5'],
    icon: 'fas fa-globe'
  },
  {
    title: 'Word guessing game',
    description:
      'A Hangman-like word game which lets you guess a word, letter by letter.',
    website: 'https://wordgame.softwarecradle.com/',
    code: 'https://github.com/debadeepsen/vuewordgame/',
    note: 'Listed on the official VueJS Github',
    tech: ['vuejs', 'html5'],
    icon: 'fas fa-book'
  },
  {
    title: 'Demo job portal',
    description:
      'A replication of some of the features offered by popular job search websites like Indeed, Monster, and others.',
    website: 'https://skillpeek.softwarecradle.com/',
    tech: ['react', 'html5', 'nodejs'],
    icon: 'fas fa-briefcase'
  },
  {
    title: 'A food ordering app',
    description:
      'A mobile app that imitates features found in popular food delivery apps.',
    code: 'https://github.com/debadeepsen/foodorder',
    tech: ['vuejs', 'html5'],
    icon: 'fa-pizza-slice'
  },
  {
    title: 'Vue Chess Game',
    description: 'A chess game playable against 3 levels of AI opponent.',
    website: 'https://chess.softwarecradle.com/',
    code: 'https://github.com/debadeepsen/vue-chess/',
    tech: ['vuejs', 'html5'],
    icon: 'fa-chess'
  },
  {
    title: 'Internationalized E-commerce Site',
    description:
      'An e-commerce portal that allows the user to switch languages between English and French. Uses the nuxt-i18n package.',
    website: 'https://github.com/debadeepsen/nuxt-i18n-ecommerce-demo/',
    tech: ['nuxtjs', 'html5'],
    icon: 'fa-shopping-cart'
  }
]

export default projects
