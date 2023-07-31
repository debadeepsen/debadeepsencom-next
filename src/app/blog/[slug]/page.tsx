import { H1 } from '@/components/Title'
import { DevToArticle } from '@/types/types'
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
    <div>
      <H1 leftAligned>{article.title}</H1>
      <p>
        (Originally posted on{' '}
        <a href={article.canonical_url}>{article.canonical_url}</a>)
      </p>
      <div dangerouslySetInnerHTML={{ __html: article.body_html ?? '' }}></div>
    </div>
  )
}

export default BlogArticle
