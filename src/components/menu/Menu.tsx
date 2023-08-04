import { ColorModes, LIGHT } from '@/lib/constants/colorModeConstants'
import { MENU_INFO } from '@/lib/constants/menuConstants'
import { RootState } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setOpen, toggleOpen } from '@/store/slices/menuSlice'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItem = ({
  href,
  text,
  icon
}: {
  href: string
  text: string
  icon: string
}) => {
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
        'py-6 sm:p-0 w-full sm:w-auto text-[16px] flex justify-center items-center text-white transition-all rounded-xs md:rounded-md m-1 sm:px-4 sm:py-2 w-[80px] hover:no-underline ' +
        (isSelected ? selectedClass : '')
      }
      style={{ color: ColorModes[colorModeValue].menu }}
    >
      <i className={icon + ' inline-block mr-2'}></i>
      {text}
    </Link>
  )
}

const MenuList = () => (
  <>
    {MENU_INFO.map(m => (
      <MenuItem key={m.href} href={m.href} text={m.text} icon={m.icon} />
    ))}
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
        <div
          className={
            'fixed top-[64px] left-0 w-full h-[100vh] box-border transition-all m-0 p-0 shadow-xl z-22 border-2'
          }
          style={{
            background: ColorModes[colorModeValue].cardBg,
            opacity: Number(menuOpen),
            pointerEvents: menuOpen ? 'all' : 'none'
          }}
        >
          <MenuList />
        </div>
      </div>
    </div>
  )
}

export default Menu
