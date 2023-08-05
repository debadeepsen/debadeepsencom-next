/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import BlogBlurb from '@/components/fragments/BlogBlurb'
import { DevToArticle } from '@/types/types'
import Link from 'next/link'

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

      <div className='flex flex-wrap'>
        {articles.map((article: DevToArticle) => (
          <Card
            key={article.id}
            classList='w-[92%] sm:w-[95%] md:w-[98%] lg:w-[45%] lg:mr-4 relative'
          >
            <div
              style={{
                backgroundImage: article.cover_image
                  ? `url(${article.cover_image})`
                  : 'url(/img/hex.png)'
              }}
              className='h-[200px] bg-center bg-cover'
            />
            <div className='relative top-[-6px]'>
              <Link href={'/blog/' + article.slug}>
                <h2>{article.title}</h2>
              </Link>

              <p className='mt-2 mb-4 p-2 bg-gray-50/10'>
                {article.description}
              </p>

              <div className='flex'>
                <div className='rounded-full bg-lime-200/30 p-1 px-2 text-xs text-bold mr-2'>
                  {article.public_reactions_count} reactions
                </div>
                <div className='rounded-full bg-blue-200/30 p-1 px-2 text-xs'>
                  {article.comments_count} comments
                </div>
              </div>
            </div>

            {article.public_reactions_count > 50 && (
              <div className='absolute top-[20px] right-[20px] bg-red-600/60 rounded-md text-xs p-1 px-2 text-white'>
                POPULAR
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog
