import { ColorModes } from '@/lib/constants/colorModeConstants'
import { THEME_COLOR } from '@/lib/constants/commonConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'
import React from 'react'

const MenuItem = ({ href, text }: { href: string; text: string }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  return (
    <Link
      href={href}
      className='text-[16px] flex justify-center items-center text-white transition-all rounded-md m-1 px-4 py-2 w-[80px] bg-white/20 hover:bg-white/30 hover:no-underline'
      style={{ color: ColorModes[colorModeValue].menu }}
    >
      {text}
    </Link>
  )
}

const Menu = () => {
  return (
    <div className='flex fixed top-[20px] right-[20px] z-20'>
      <MenuItem href='/' text='Home' />
      <MenuItem href='/about' text='About' />
      <MenuItem href='/blog' text='Blog' />
    </div>
  )
}

export default Menu
