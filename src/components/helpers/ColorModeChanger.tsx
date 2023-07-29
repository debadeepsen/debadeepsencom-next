'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Switch from './Switch'
import { updateColorMode } from '@/store/slices/colorModeSlice'
import {
  ColorModeValueType,
  ColorModes,
  DARK,
  LIGHT
} from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { colorModeUtil } from '@/lib/commonLib'

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

  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  const setColorMode = (mode: string) => {
    dispatch(updateColorMode({ value: mode as ColorModeValueType }))
    colorModeUtil.set(mode)
  }

  return (
    <div>
      <Switch
        initialValue={colorModeValue}
        bgColor={ColorModes[colorModeValue].cardBg}
        color={ColorModes[colorModeValue].color}
        options={[
          {
            element: <LeftElement />,
            value: LIGHT
          },
          {
            element: <RightElement />,
            value: DARK
          }
        ]}
        onChange={mode => setColorMode(mode)}
      />
    </div>
  )
}

export default ColorModeChanger
