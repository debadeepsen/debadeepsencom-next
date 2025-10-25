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

/** Defines the structure for a regular employment entry. */
export type JobEntry = {
  employer: {
    name: string
    address: string
  }
  duration_period_years: number
  last_position_held_designation: string
  nature_of_duties: string
  period: {
    from_dd_mm_yy: string
    to_dd_mm_yy: string
  }
  immediate_superior: {
    name: string
    designation: string
  }
  gross_emoluments_rs_per_month: {
    at_the_time_of_joining: number
    last_drawn: number
  }
  details_of_current_emoluments?: {
    // Optional for older jobs
    basic_pm: string
    fixed_pa: string
    variable_pa: number
    gross_pa: string
  }
  type?: 'job_experience' // Explicitly setting type for clarity
}

/** Defines the structure for a gap entry. */
export type GapEntry = {
  type: 'gap_in_experience'
  period: {
    from_dd_mm_yy: string
    to_dd_mm_yy: string
  }
  duration_days: number
  duration_string: string
  description: string
  reason: string
}

/** The timeline item can be either a JobEntry or a GapEntry. */
export type TimelineItemType = JobEntry | GapEntry
