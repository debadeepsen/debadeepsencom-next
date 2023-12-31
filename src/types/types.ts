import React from 'react'

export type PageSectionType = {
  heading?: string
  children?: React.ReactNode
  hr?: boolean
  sideGraphic?: 'left' | 'right'
  svg?: React.ReactNode
  svgOffset?: number
  bg?: boolean
}

export type DevToArticle = {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id: null
  published_timestamp: Date
  positive_reactions_count: number
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: Date
  edited_at: null
  crossposted_at: null
  published_at: Date
  last_comment_at: Date
  reading_time_minutes: number
  tag_list: string[]
  tags: string
  body_html?: string
  body_markdown?: string
  user: DevToUser
}

export type DevToUser = {
  name: string
  username: string
  twitter_username: null
  github_username: string
  user_id: number
  website_url: string
  profile_image: string
  profile_image_90: string
}

export type IPDetails = {
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
  query: string
}
