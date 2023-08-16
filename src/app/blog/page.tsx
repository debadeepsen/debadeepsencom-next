/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import BlogBlurb from '@/components/fragments/BlogBlurb'
import ErrorFragment from '@/components/fragments/Error'
import { DevToArticle } from '@/types/types'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Debadeep Sen',
  openGraph: {
    title: 'Blog | Debadeep Sen',
    description: 'Blog articles by Debadeep Sen'
  },
  alternates: {
    canonical: 'https://debadeepsen.com/blog'
  }
}

const Blog = async () => {
  const fetchDevArticles = async () => {
    const res = await fetch('https://dev.to/api/articles/me/published/', {
      headers: {
        'api-key': process.env.API_KEY ?? ''
      }
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  try {
    let articles = (await fetchDevArticles()) as DevToArticle[]

    const sortArticles = () => {
      const latest = articles[0]
      articles.splice(0, 1)
      articles.sort((a, b) => {
        return b.public_reactions_count > a.public_reactions_count ? 1 : -1
      })

      articles.unshift(latest)
    }

    sortArticles()

    return (
      <div className='w-full lg:w-[800px] xl:w-[1024px] min-[2000px]:w-[80%] mx-auto'>
        <H1>Blog</H1>
        <BlogBlurb />

        <div className='flex flex-wrap'>
          {articles.map((article: DevToArticle, i: number) => (
            <Card
              key={article.id}
              classList='w-[92%] sm:w-[95%] md:w-[98%] lg:w-[45%] min-[2000px]:w-[30%] lg:mr-4 relative'
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
                  <h2 className='leading-8'>{article.title}</h2>
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

              {i === 0 && (
                <div className='absolute top-[20px] right-[20px] bg-emerald-600/80 rounded-md text-xs p-1 px-2 text-white'>
                  NEW
                </div>
              )}

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
  } catch {
    return <ErrorFragment text='Unable to fetch the list of articles' />
  }
}

export default Blog
