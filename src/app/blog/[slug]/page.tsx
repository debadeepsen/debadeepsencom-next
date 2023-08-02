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

  return (
    <div className='w-full lg:w-[800px] xl:w-[1200px] mx-auto'>
      <div className='mt-20 mb-6 z-20'>
        <Link href='/blog'>Articles</Link>
        <i className="fas fa-caret-right inline-block mx-3"></i>
        {article.title}
      </div>
      <Card classList='w-[90%] min-[400px]:w-[94%] md-[w-95%] lg:w-full'>
        <H1 leftAligned>{article.title}</H1>
        <p>
          (Originally posted on{' '}
          <a href={article.canonical_url}>{article.canonical_url}</a>)
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: article.body_html ?? '' }}
        ></div>
      </Card>
    </div>
  )
}

export default BlogArticle
