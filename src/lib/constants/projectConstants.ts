export type ProjectType = {
  title: string
  description: string
  website?: string
  code?: string
  note?: string
  tech?: string[]
  icon: string
  color?: string
}

const projects:ProjectType[] = [
  {
    title: 'My Personal Website',
    description:
      'The very website you\'re on right now. Made with NextJS.',
    website: 'https://debadeepsen.com/',
    code: 'https://github.com/debadeepsen/debadeepsencom-next/',
    tech: ['nextjs', 'html5'],
    icon: 'flat-color-icons:globe'
  },
  {
    title: 'Word guessing game',
    description:
      'A Hangman-like word game which lets you guess a word, letter by letter.',
    website: 'https://wordgame.softwarecradle.com/',
    code: 'https://github.com/debadeepsen/vuewordgame/',
    note: 'Listed on the official VueJS Github',
    tech: ['vuejs', 'html5'],
    icon: 'streamline-emojis:green-book'
  },
  {
    title: 'Cricket Stats Visualization',
    description:
      'A visualization of cricket stats for a T20 match.',
    website: 'https://cric-stats-ds.vercel.app/',
    code: 'https://github.com/debadeepsen/cric-stats/',
    tech: ['react', 'html5', 'nextjs'],
    icon: 'noto-v1:cricket-game'
  },
  {
    title: 'Durga Puja Map',
    description:
      'An interactive map of Kolkata Durga Pujas.',
    website: 'https://durga-pujo-map.vercel.app/',
    code: 'https://github.com/debadeepsen/durga-pujo-map/',
    tech: ['react', 'html5', 'nextjs'],
    icon: 'streamline-kameleon-color:map-pin'
  },
  {
    title: 'Vue Chess Game',
    description: 'A chess game playable against 3 levels of AI opponent.',
    website: 'https://chess.softwarecradle.com/',
    code: 'https://github.com/debadeepsen/vue-chess/',
    tech: ['vuejs', 'html5'],
    icon: 'fa-solid:chess',
    color: '#03a2ab'
  },
  {
    title: 'Internationalized E-commerce Site',
    description:
      'An e-commerce portal that allows the user to switch languages between English and French. Uses the nuxt-i18n package.',
    website: 'https://github.com/debadeepsen/nuxt-i18n-ecommerce-demo/',
    tech: ['nuxtjs', 'html5'],
    icon: 'material-icon-theme:folder-cart'
  }
]

export default projects
