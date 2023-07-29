import { ColorModeValueType } from '@/lib/constants/colorModeConstants'
import React, { ReactNode, useState } from 'react'

export type OptionType = { element?: ReactNode; value: string }
export type OptionsProp = {
  initialValue: string
  bgColor?: string
  color?: string
  location?: number
  options: OptionType[]
  onChange?: (value: string) => void
}

type SwitcherPositionType = 'left' | 'right'

const Switch = ({
  initialValue,
  bgColor,
  color,
  options,
  location = 20,
  onChange
}: OptionsProp) => {
  const [leftOption, rightOption] = options
  const intialValueIsLeft = initialValue === leftOption.value
  const [switcherPosition, setSwitcherPosition] = useState(
    intialValueIsLeft ? -6 : 30
  )
  const [state, setState] = useState<SwitcherPositionType>(
    (intialValueIsLeft ? 'left' : 'right') as SwitcherPositionType
  )

  const toggleValue = () => {
    const newPosition = state === 'left' ? 30 : -6
    const newValue = state === 'left' ? rightOption.value : leftOption.value
    const newState = state === 'left' ? 'right' : 'left'

    setSwitcherPosition(newPosition)
    setState(newState)

    onChange?.(newValue)
  }

  return (
    <div className='flex fixed' style={{ top: location, left: location }}>
      <button
        aria-label='switch'
        className='flex rounded-[100px] shadow-sm p-2 border-0 z-10 cursor-pointer relative'
        style={{ background: bgColor, color: color }}
        onClick={() => toggleValue()}
      >
        <div className='flex justify-center items-center'>
          {leftOption.element ?? leftOption.value}
        </div>
        <div className='w-[20px]'></div>
        <div className='flex justify-center items-center'>
          {rightOption.element ?? rightOption.value}
        </div>
        <div
          className='absolute top-[2px] border-0 rounded-[100px] w-[32px] h-[32px] bg-[#fff2]'
          style={{
            transform: `translateX(${switcherPosition}px)`,
            boxShadow: '0px 1px 5px #1117'
          }}
        ></div>
      </button>
    </div>
  )
}

export default Switch
