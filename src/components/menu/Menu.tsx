import { ColorModes } from '@/lib/constants/colorModeConstants'
import { THEME_COLOR } from '@/lib/constants/commonConstants'
import { RootState } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggleOpen } from '@/store/slices/menuSlice'
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
        'text-[16px] flex justify-center items-center text-white transition-all rounded-xs md:rounded-md m-1 px-4 py-2 w-[80px] hover:no-underline' +
        (colorModeValue === 'light' ? ' bg-white/50 hover:bg-white/80' : ' bg-white/0 md:bg-white/20 hover:bg-white/40')
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

  const menuOpen = useAppSelector((state: RootState) => state.menu.open)
  const dispatch = useAppDispatch()

  const toggleMenu = () => {
    dispatch(toggleOpen())
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
            'absolute top-[24px] right-0 transition-all p-2 shadow-xl'
          }
          style={{
            background: ColorModes[colorModeValue].cardBg,
            opacity: Number(menuOpen)
          }}
        >
          <MenuList />
        </div>
      </div>
    </div>
  )
}

export default Menu
