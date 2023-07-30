/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Switch from './Switch'
import { setLoadComplete, updateColorMode } from '@/store/slices/colorModeSlice'
import {
  ColorModeValueType,
  ColorModes,
  DARK,
  LIGHT
} from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { colorModeUtil } from '@/lib/commonLib'
import { useEffect } from 'react'

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

  useEffect(() => {
    // if an entry is found in localStorage, set it as the current color mode
    if (colorModeUtil.manualPreferenceSet) {
      dispatch(
        updateColorMode({
          value: colorModeUtil.value
        })
      )
    }
    else {
      // find the preferences from the system
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      dispatch(
        updateColorMode({
          value: (mql?.matches ? DARK : LIGHT) as ColorModeValueType
        })
      )
    }
  
    dispatch(setLoadComplete())
  }, [])

  return (
    <div>
      <Switch
        location={20}
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
