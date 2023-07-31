import { ColorModes } from '@/lib/constants/colorModeConstants'
import { THEME_COLOR } from '@/lib/constants/commonConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuItem = ({ href, text }: { href: string; text: string }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  return (
    <Link
      href={href}
      className={
        'text-[16px] flex justify-center items-center text-white transition-all rounded-xs md:rounded-md m-1 px-4 py-2 w-[80px] bg-white/20 hover:bg-white/40 hover:no-underline' +
        (colorModeValue === 'light' ? ' bg-white/50 hover:bg-white/80' : '')
      }
      style={{ color: ColorModes[colorModeValue].menu }}
    >
      {text}
    </Link>
  )
}

const MenuList = () => (
  <>
    <MenuItem href='/' text='Home' />
    <MenuItem href='/about' text='About' />
    <MenuItem href='/blog' text='Blog' />
  </>
)

const Menu = () => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  const [menuOpacity, setMenuOpacity] = useState(0)
  const toggleMenu = () => {
    const newValue = menuOpacity === 0 ? 1 : 0
    setMenuOpacity(newValue)
  }

  return (
    <div className='fixed top-[20px] right-[20px] z-20'>
      <div className='hidden md:flex'>
        <MenuList />
      </div>
      <div className='md:hidden relative'>
        <button
          className='bg-transparent border-0'
          onClick={() => toggleMenu()}
        >
          <i
            className='fas fa-bars'
            style={{ fontSize: 20, color: ColorModes[colorModeValue].menu }}
          ></i>
        </button>
        <div
          className={
            'absolute top-[24px] right-0 transition-all opacity-' + menuOpacity
          }
        >
          <MenuList />
        </div>
      </div>
    </div>
  )
}

export default Menu
