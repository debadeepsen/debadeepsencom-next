import { ReactNode } from 'react'

export type MenuType = {
  href: string
  text: string
  icon: string
}

export const MENU_INFO: MenuType[] = [
  {
    href: '/',
    text: 'Home',
    icon: 'fas fa-home'
  },
  {
    href: '/photography',
    text: 'Photography',
    icon: 'fas fa-images'
  },
  {
    href: '/blog',
    text: 'Blog',
    icon: 'fas fa-blog'
  },
  {
    href: '/about',
    text: 'About',
    icon: 'fas fa-address-card'
  }
]
