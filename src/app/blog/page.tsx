import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import { DevToArticle } from '@/types/types'
import React, { useEffect, useState } from 'react'

const Blog = async () => {
  const fetchDevArticles = async () => {
    const res = await fetch('https://dev.to/api/articles?username=debadeepsen')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const articles = await fetchDevArticles()

  return (
    <div className='w-full lg:w-[800px] xl:w-[1024px] mx-auto'>
      <H1>Blog</H1>
      <p>
        I mostly write on{' '}
        <a target='_blank' href='https://dev.to/debadeepsen'>
          Dev.to
        </a>
        , but now that this website is ready, I might switch over or have a
        healthy mix. I&apos;m planning on setting up a newsletter some time
        soon, but until then, keep an eye on this page for new articles.
      </p>
      {articles.map((article: DevToArticle) => (
        <Card key={article.id} classList='w-[92%] sm:w-full'>
          <div className='relative top-[-6px]'>
            <h2>{article.title}</h2>
            <p>{article.description}</p>

            <div className='flex'>
              <div className='rounded-full bg-lime-200/30 p-3 text-xs text-bold mr-2'>
                {article.public_reactions_count} reactions
              </div>
              <div className='rounded-full bg-blue-200/30 p-3 text-xs'>
                {article.comments_count} comments
              </div>
            </div>

            {article.public_reactions_count > 50 && (
              <div className='absolute top-[-8px] right-[2px] bg-red-200/50 text-red-900 rounded-md text-sm p-3'>
                POPULAR
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Blog
