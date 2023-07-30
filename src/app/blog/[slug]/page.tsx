import React from 'react'

const BlogArticle = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>
}

export default BlogArticle
