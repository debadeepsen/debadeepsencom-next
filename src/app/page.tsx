import Certifications from '@/components/Certifications'
import ProjectList from '@/components/ProjectList'
import Skills from '@/components/Skills'
import Main from '@/components/containers/Main'
import Hero from '@/components/Hero'
import PageBottom from '@/components/PageBottom'
import Divider from '@/components/Divider'
import ArticleList from '@/components/ArticleList'
import Socials from '@/components/Socials'
import GuitarSVG from '@/components/SVGs/GuitarSVG'

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
      <Socials />
      <section className='flex align-center justify-center mt-[-80px]'>
        <GuitarSVG />
      </section>
      <PageBottom />
    </Main>
  )
}
