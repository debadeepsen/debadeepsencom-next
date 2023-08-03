import { ColorModes, LIGHT } from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setOpen, toggleOpen } from '@/store/slices/menuSlice'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItem = ({ href, text }: { href: string; text: string }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  const pathname = usePathname()
  const isSelected =
    (href === '/' && pathname === '/') ||
    (href !== '/' && pathname.includes(href))

  const selectedClass =
    colorModeValue === LIGHT ? 'bg-white/50' : 'bg-white/0 sm:bg-white/20'

  return (
    <Link
      href={href}
      className={
        'text-[16px] flex justify-center items-center text-white transition-all rounded-xs md:rounded-md m-1 px-4 py-2 w-[80px] hover:no-underline ' +
        (isSelected ? selectedClass : '')
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
    console.log('toggle')
    dispatch(toggleOpen())
  }

  return (
    <div className='fixed top-[20px] right-[20px] z-20'>
      {/* desktop menu */}
      <div className='hidden md:flex'>
        <MenuList />
      </div>

      {/* mobile menu */}
      <div className='md:hidden relative'>
        <button
          className='bg-transparent border-0 z-22'
          onClick={() => toggleMenu()}
        >
          <i
            className='fas fa-bars'
            style={{ fontSize: 20, color: ColorModes[colorModeValue].menu }}
          ></i>
        </button>
        {/* <div
          className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-100/50 md:hidden'
          onClick={() => dispatch(setOpen(false))}
        ></div> */}
        <div
          className={
            'absolute top-[24px] right-0 transition-all p-2 shadow-xl z-22'
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
