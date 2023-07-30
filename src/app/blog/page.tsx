import { H1 } from '@/components/Title'
import React from 'react'

const Blog = () => {
  return (
    <div className='w-full lg:w-[800px] xl:w-[1024px] mx-auto'>
      <H1>Blog</H1>
      <p>
        I mostly write on{' '}
        <a target='_blank' href='https://dev.to/debadeepsen'>
          Dev.to
        </a>,{' '}
        but now that this website is ready, I might switch over or have a
        healthy mix. I&apos;m planning on setting up a newsletter some time
        soon, but until then, keep an eye on this page for new articles.
      </p>
    </div>
  )
}

export default Blog
