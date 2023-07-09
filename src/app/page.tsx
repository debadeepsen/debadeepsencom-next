import Certifications from '@/components/Certifications'
import ProjectList from '@/components/ProjectList'
import Skills from '@/components/Skills'
import Main from '@/components/containers/Main'
import Hero from '@/components/Hero'
import PageBottom from '@/components/PageBottom'
import Divider from '@/components/Divider'

export default function Home() {
  return (
    <Main>
      <Hero />
      <Certifications heading='Certifications' />
      <Divider />
      <Skills heading='Skills' />
      <Divider />
      <ProjectList heading='Featured Projects' />
      <Divider />


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

      {/* ******* */}
      {/* ******* */}
      {/* In loving memoriam */}
      {/* ******* */}
      {/* <div className='separator' />
      <h2>Personal Blog</h2>
      <div className='icons'>
        <div>The Messy Geek</div>
        <div>
          <a href='https://messygeek.com' target='_blank'>
            https://messygeek.com
          </a>
        </div>
      </div> */}
      {/* ******* */}
      {/* ******* */}

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
      <div style={{ height: 300 }} />
      <PageBottom />
    </Main>
  )
}
