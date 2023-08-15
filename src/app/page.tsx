import Certifications from '@/components/Certifications'
import ProjectList from '@/components/ProjectList'
import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import ArticleList from '@/components/ArticleList'
import Socials from '@/components/Socials'
import GuitarSVG from '@/components/SVGs/GuitarSVG'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debadeep Sen',
  openGraph: {
    title: 'Debadeep Sen',
    description: 'Personal website of Debadeep Sen'
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <Skills heading='Skills' />
      <Divider />
      <ProjectList heading='Featured Projects' />
      <Divider />
      <ArticleList heading='Featured Articles' />
      <Divider />
      <Certifications heading='Certifications' />
      <Divider />
      <Socials />
      <section className='flex align-center justify-center mt-[-80px]'>
        <GuitarSVG />
      </section>
    </>
  )
}
