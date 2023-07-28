import React from 'react'

export type PageSectionType = {
  heading?: string
  children?: React.ReactNode
  hr?: boolean
  sideGraphic?: 'left' | 'right'
  svg?: React.ReactNode,
  svgOffset?: number,
  bg?: boolean
}
