import ScrollPercent from '@/components/ScrollPercent'
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import { DevToArticle } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  // `https://dev.to/api/articles/debadeepsen/${params.slug}`
  const fetchDevArticle = async () => {
    const res = await fetch(
      `https://dev.to/api/articles/debadeepsen/${params.slug}`
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const article = (await fetchDevArticle()) as DevToArticle
  const tagList = Array.isArray(article.tag_list) ? article.tag_list : (article.tag_list as string).split(',')

  return (
    <div className='w-full lg:w-[800px] xl:w-[1200px] mx-auto relative'>
      <div className='mt-20 mb-6 z-20'>
        <Link href='/blog'>Blog</Link>
        <i className='fas fa-caret-right inline-block mx-3'></i>
        {article.title}
      </div>
      <Card classList='blog-article sm:mr-0 w-[95%] md:w-[97%]'>
        <div
          style={{
            backgroundImage: article.cover_image
              ? `url(${article.cover_image})`
              : 'url(/img/hex.png)'
          }}
          className='h-[400px] bg-center bg-cover'
        />
        <H1 leftAligned>{article.title}</H1>
        <div className='flex'>
          {tagList.map((tag, i) => (
            <span
              className='rounded-full p-2 px-4 mr-2 uppercase text-sm tracking-wide bg-gray-600/20 dark:bg-black/25'
              key={i}
            >
              {tag}
            </span>
          ))}
        </div>
        <p>
          (Originally posted on{' '}
          <a href={article.canonical_url} target='_blank'>
            {article.canonical_url}
            <i className='fas fa-external-link-alt'></i>
          </a>
          )
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: article.body_html ?? '' }}
        ></div>
        <div className='mt-4 pt-3 text-sm border-solid border-0 border-t-[1px] border-gray-500/10 dark:border-gray-600/30'>
          {article.comments_count} comments. To view or add your own, go to{' '}
          <a href={article.canonical_url}>
            {article.canonical_url}
            <i className='fas fa-external-link-alt'></i>
          </a>
        </div>
      </Card>
      <ScrollPercent />
    </div>
  )
}

export default BlogArticle
