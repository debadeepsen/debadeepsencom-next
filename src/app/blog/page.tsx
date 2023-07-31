import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import BlogBlurb from '@/components/fragments/BlogBlurb'
import { DevToArticle } from '@/types/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = async () => {
  const fetchDevArticles = async () => {
    const res = await fetch('https://dev.to/api/articles?username=debadeepsen')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const articles = (await fetchDevArticles()) as DevToArticle[]
  articles.sort((a, b) => {
    return b.public_reactions_count - a.public_reactions_count
  })

  return (
    <div className='w-full lg:w-[800px] xl:w-[1024px] mx-auto'>
      <H1>Blog</H1>
      <BlogBlurb />

      {articles.map((article: DevToArticle) => (
        <Card
          key={article.id}
          classList='w-[92%] sm:w-[95%] md:w-[98%] lg:w-full'
        >
          <div className='relative top-[-6px]'>
            <Link href={'/blog/' + article.slug}>
              <h2>{article.title}</h2>
            </Link>

            <p className='mt-2 mb-4 p-2 bg-gray-50/10'>{article.description}</p>

            <div className='flex'>
              <div className='rounded-full bg-lime-200/30 p-3 text-xs text-bold mr-2'>
                {article.public_reactions_count} reactions
              </div>
              <div className='rounded-full bg-blue-200/30 p-3 text-xs'>
                {article.comments_count} comments
              </div>
            </div>

            {article.public_reactions_count > 50 && (
              <div className='absolute top-[-8px] right-[2px] bg-red-500/40 rounded-md text-xs md:text-sm p-3'>
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
