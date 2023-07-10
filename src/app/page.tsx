import Certifications from '@/components/Certifications'
import ProjectList from '@/components/ProjectList'
import Skills from '@/components/Skills'
import Main from '@/components/containers/Main'
import Hero from '@/components/Hero'
import PageBottom from '@/components/PageBottom'
import Divider from '@/components/Divider'
import ArticleList from '@/components/ArticleList'

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
      <ArticleList heading='Featured Articles' />

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

      <Divider />
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
{/*       <PageBottom /> */}
    </Main>
  )
}
