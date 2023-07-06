import Certifications from '@/components/Certifications'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main style={{ padding: 50 }}>
      <Certifications heading='Certifications' />
      <Skills heading='Skills' />



      
      <div className='separator' />
      <h2>Featured Projects</h2>
      <div className='projects'>
        <div className='project-block'>
          <div className='tech-stack'>
            <i className='fab fa-vuejs' title='VueJS' aria-hidden='true' />
            <span className='sr-only'>VueJS</span>{' '}
            <i className='fab fa-html5' title='HTML5' aria-hidden='true' />
            <span className='sr-only'>HTML5</span>
          </div>
          <i className='p-icon las la-book-open' />{' '}
          <i className='p-icon-sm las la-book-open' />
          <div className='project-caption'>Word guessing game</div>
          <div className='description'>
            A Hangman-like word game which lets you guess a word, letter by
            letter.
          </div>
          <div>
            <i className='fa fa-globe' aria-hidden='true' />{' '}
            <a href='https://wordgame.softwarecradle.com/' target='_blank'>
              https://wordgame.softwarecradle.com/
            </a>
          </div>
          <div>
            <i className='las la-code' />{' '}
            <a
              href='https://github.com/debadeepsen/vuewordgame/'
              target='_blank'
            >
              https://github.com/debadeepsen/vuewordgame/
            </a>
          </div>
          <div className='highlight'>
            Listed on the official{' '}
            <a href='https://github.com/vuejs/awesome-vue' target='_blank'>
              VueJS Github
            </a>
          </div>
        </div>
        <div className='project-block'>
          <div className='tech-stack'>
            <i className='fab fa-vuejs' title='VueJS' aria-hidden='true' />
            <span className='sr-only'>VueJS</span>{' '}
            <i className='fab fa-html5' title='HTML5' aria-hidden='true' />
            <span className='sr-only'>HTML5</span>{' '}
            <i className='fab fa-node' title='Node.JS' aria-hidden='true' />
            <span className='sr-only'>Node.JS</span>{' '}
            <i className='fab fa-php' title='PHP' aria-hidden='true' />
            <span className='sr-only'>PHP</span>
          </div>
          <i className='p-icon las la-briefcase' />{' '}
          <i className='p-icon-sm las la-briefcase' />
          <div className='project-caption'>Demo job portal</div>
          <div className='description'>
            A replication of some of the features offered by popular job search
            websites like Indeed, Monster, and others.
          </div>
          <div>
            <i className='fa fa-globe' aria-hidden='true' />{' '}
            <a href='https://skillpeek.softwarecradle.com/' target='_blank'>
              https://skillpeek.softwarecradle.com/
            </a>
          </div>
        </div>
        <div className='project-block'>
          <div className='tech-stack'>
            <i className='fab fa-react' title='React' aria-hidden='true' />
            <span className='sr-only'>React</span>{' '}
            <i className='fab fa-html5' title='HTML5' aria-hidden='true' />
            <span className='sr-only'>HTML5</span>{' '}
            <i className='fab fa-node' title='Node.JS' aria-hidden='true' />
            <span className='sr-only'>Node.JS</span>
          </div>
          <i className='p-icon las la-utensils' />{' '}
          <i className='p-icon-sm las la-utensils' />
          <div className='project-caption'>Personal recipe book</div>
          <div className='description'>
            A recipe book that lets you build your own recipe by adding
            ingredients, and calculates the total Calorie and macronutrient
            counts for that, using the{' '}
            <a href='https://www.fatsecret.com/' target='_blank'>
              FatSecret API
            </a>
            .
          </div>
          <div>
            <i className='fa fa-globe' aria-hidden='true' />{' '}
            <a href='https://mireceta.softwarecradle.com/' target='_blank'>
              https://mireceta.softwarecradle.com/
            </a>
          </div>
          <div>
            <i className='las la-code' />{' '}
            <a
              href='https://gitlab.com/debadeep.sen/nutrition-react-node/'
              target='_blank'
            >
              https://gitlab.com/debadeep.sen/nutrition-react-node/
            </a>
          </div>
        </div>
        <div className='project-block'>
          <div className='tech-stack'>
            <i
              className='fab fa-react'
              title='React Native'
              aria-hidden='true'
            />
            <span className='sr-only'>React Native</span>
          </div>
          <i className='p-icon las la-hamburger' />{' '}
          <i className='p-icon-sm las la-hamburger' />
          <div className='project-caption'>A food ordering app</div>
          <div className='description'>
            A mobile app that imitates features found in popular food delivery
            apps.
          </div>
          <div>
            <i className='las la-code' />{' '}
            <a href='https://github.com/debadeepsen/foodorder' target='_blank'>
              https://github.com/debadeepsen/foodorder
            </a>
          </div>
        </div>
        <div className='project-block'>
          <div className='tech-stack'>
            <i className='fab fa-vuejs' title='VueJS' aria-hidden='true' />
            <span className='sr-only'>VueJS</span>{' '}
            <i className='fab fa-html5' title='HTML5' aria-hidden='true' />
            <span className='sr-only'>HTML5</span>
          </div>
          <i className='p-icon fas fa-chess' aria-hidden='true' />{' '}
          <i className='p-icon-sm fas fa-chess' aria-hidden='true' />
          <div className='project-caption'>Vue Chess Game</div>
          <div className='description'>
            A chess game playable against 3 levels of AI opponent.
          </div>
          <div>
            <i className='fa fa-globe' aria-hidden='true' />{' '}
            <a href='https://chess.softwarecradle.com/' target='_blank'>
              https://chess.softwarecradle.com/
            </a>
          </div>
          <div>
            <i className='las la-code' />{' '}
            <a href='https://github.com/debadeepsen/vue-chess/' target='_blank'>
              https://github.com/debadeepsen/vue-chess/
            </a>
          </div>
        </div>
        <div className='project-block'>
          <div className='tech-stack'>
            <i className='fab fa-vuejs' title='VueJS' aria-hidden='true' />
            <span className='sr-only'>VueJS</span>{' '}
            <i
              className='devicon-nuxtjs-plain'
              title='NuxtJS'
              aria-hidden='true'
            />{' '}
            <i className='fab fa-html5' title='HTML5' aria-hidden='true' />
            <span className='sr-only'>HTML5</span>
          </div>
          <i className='p-icon fas fa-shopping-cart' aria-hidden='true' />{' '}
          <i className='p-icon-sm fas fa-shopping-cart' aria-hidden='true' />
          <div className='project-caption'>
            Internationalized E-commerce Site
          </div>
          <div className='description'>
            An e-commerce portal that allows the user to switch languages
            between English and French. Uses the <code>nuxt-i18n</code> package.
          </div>
          <div>
            <i className='las la-code' />{' '}
            <a
              href='https://github.com/debadeepsen/nuxt-i18n-ecommerce-demo/'
              target='_blank'
            >
              https://github.com/debadeepsen/nuxt-i18n-ecommerce-demo/
            </a>
          </div>
        </div>
      </div>
      <div className='separator' />
      <h2>Featured Articles</h2>
      <div className='articles'>
        <div className='article'>
          <div className='article-caption'>Page scroll progress bars</div>
          <div>
            <a
              href='https://dev.to/debadeepsen/page-scroll-progress-bars-fjl'
              target='_blank'
            >
              https://dev.to/debadeepsen/page-scroll-progress-bars-fjl
            </a>
          </div>
        </div>
        <div className='article'>
          <div className='article-caption'>
            Animated underline on hover (pure CSS)
          </div>
          <div>
            <a
              href='https://dev.to/debadeepsen/animated-underline-on-hover-pure-css-4bm6'
              target='_blank'
            >
              https://dev.to/debadeepsen/animated-underline-on-hover-pure-css-4bm6
            </a>
          </div>
        </div>
        <div className='article'>
          <div className='article-caption'>Vintage photo effect with CSS</div>
          <div>
            <a
              href='https://dev.to/debadeepsen/vintage-photo-effect-with-css-16oj'
              target='_blank'
            >
              https://dev.to/debadeepsen/vintage-photo-effect-with-css-16oj
            </a>
          </div>
        </div>
        <div className='article'>
          <div className='article-caption'>
            A table with a fixed (sticky) header
          </div>
          <div>
            <a
              href='https://dev.to/debadeepsen/a-table-with-a-fixed-sticky-header-54gm'
              target='_blank'
            >
              https://dev.to/debadeepsen/a-table-with-a-fixed-sticky-header-54gm
            </a>
          </div>
        </div>
        <div className='article'>
          <div className='article-caption'>
            Drawer navigation menu using CSS and Vue JS
          </div>
          <div>
            <a
              href='https://dev.to/debadeepsen/drawer-navigation-menu-using-css-and-vue-js-hho'
              target='_blank'
            >
              https://dev.to/debadeepsen/drawer-navigation-menu-using-css-and-vue-js-hho
            </a>
          </div>
        </div>
        <div className='article'>
          <div className='article-caption'>
            Making a sliding tab in React Native
          </div>
          <div>
            <a
              href='https://dev.to/debadeepsen/making-a-sliding-tab-bar-in-react-native-1ah0'
              target='_blank'
            >
              https://dev.to/debadeepsen/making-a-sliding-tab-bar-in-react-native-1ah0
            </a>
          </div>
        </div>
        <div className='article'>
          <div className='article-caption'>
            Introduction to React for Vue JS developers series
          </div>
          <div>
            Part 1:{' '}
            <a
              href='https://dev.to/debadeepsen/react-jumpstart-for-the-vuejs-developer-part-1-4ihf'
              target='_blank'
            >
              https://dev.to/debadeepsen/react-jumpstart-for-the-vuejs-developer-part-1-4ihf
            </a>
          </div>
        </div>
      </div>
      <div className='separator' />
      <h2>Personal Blog</h2>
      <div className='icons'>
        <div>The Messy Geek</div>
        <div>
          <a href='https://messygeek.com' target='_blank'>
            https://messygeek.com
          </a>
        </div>
      </div>
      <div className='separator' />
      <h2>Find Me On</h2>
      <div className='icons'>
        <a href='https://dev.to/debadeepsen' target='_blank'>
          <i className='fab fa-dev' aria-hidden='true' />{' '}
        </a>
        <a href='https://github.com/debadeepsen' target='_blank'>
          <i className='fab fa-github' aria-hidden='true' />{' '}
        </a>
        <a href='https://www.linkedin.com/in/debadeep/' target='_blank'>
          <i className='fab fa-linkedin' aria-hidden='true' />
        </a>
      </div>
      <div style={{ height: 100 }} />
    </main>
  )
}
