'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Switch from './Switch'
import { updateColorMode } from '@/store/slices/colorModeSlice'
import { ColorModeValueType } from '@/lib/constants/colorModeConstants'

const LeftElement = () => (
  <i className='fas fa-sun' style={{ fontSize: 20 }}></i>
)

const RightElement = () => (
  <i
    className='fas fa-moon'
    style={{ fontSize: 16, position: 'relative', top: 2 }}
  ></i>
)

const ColorModeChanger = () => {
  const dispatch = useAppDispatch()

  const setColorMode = (mode: string) => {
    dispatch(updateColorMode({ value: mode as ColorModeValueType }))
  }

  return (
    <div>
      <Switch
        options={[
          {
            element: <LeftElement />,
            value: 'Sun'
          },
          {
            element: <RightElement />,
            value: 'Moon'
          }
        ]}
        onChange={mode => setColorMode(mode)}
      />
    </div>
  )
}

export default ColorModeChanger
