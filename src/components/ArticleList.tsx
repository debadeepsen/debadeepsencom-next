import React from 'react'
import PageSection from './containers/PageSection'
import { PageSectionType } from '@/types/types'
import ArticlesSVG from './SVGs/ArticlesSVG'

const Article = ({ caption, url }: { caption: string; url: string }) => {
  return (
    <div className='mb-2'>
      <h3 className='mb-0'>{caption}</h3>
      <div>
        <a href={url} target='_blank'>
          {url}
          <i className='fas fa-external-link-alt'></i>
        </a>
      </div>
    </div>
  )
}

const ArticleList = ({ heading }: PageSectionType) => {
  return (
    <PageSection
      heading={heading}
      sideGraphic='left'
      svg={<ArticlesSVG />}
      svgOffset={10}
    >
      <Article
        caption='Page scroll progress bars'
        url='https://dev.to/debadeepsen/page-scroll-progress-bars-fjl'
      />

      <Article
        caption='Animated underline on hover (pure CSS)'
        url='https://dev.to/debadeepsen/animated-underline-on-hover-pure-css-4bm6'
      />

      <Article
        caption='Vintage photo effect with CSS'
        url='https://dev.to/debadeepsen/vintage-photo-effect-with-css-16oj'
      />

      <Article
        caption='A table with a fixed (sticky) header'
        url='https://dev.to/debadeepsen/a-table-with-a-fixed-sticky-header-54gm'
      />

      <Article
        caption='Drawer navigation menu using CSS and Vue JS'
        url='https://dev.to/debadeepsen/drawer-navigation-menu-using-css-and-vue-js-hho'
      />

      <Article
        caption='Making a sliding tab in React Native'
        url='https://dev.to/debadeepsen/making-a-sliding-tab-bar-in-react-native-1ah0'
      />
    </PageSection>
  )
}

export default ArticleList
