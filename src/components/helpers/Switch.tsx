import React, { ReactNode, useState } from 'react'

export type OptionType = { element?: ReactNode; value: string }
export type OptionsProp = {
  options: OptionType[]
  onChange?: (value: string) => void
}

const Switch = ({ options, onChange }: OptionsProp) => {
  const [leftOption, rightOption] = options
  const [switcherPosition, setSwitcherPosition] = useState(-6)
  const [state, setState] = useState<'left' | 'right'>('left')

  const toggleValue = () => {
    const newPosition = state === 'left' ?  30  : -6
    const newValue = state === 'left' ? rightOption.value : leftOption.value
    const newState = state === 'left' ? 'right' : 'left'

    setSwitcherPosition(newPosition)
    setState(newState)

    onChange?.(newValue)
  }

  return (
    <div className='flex fixed left-[40px] top-[40px]'>
      <button
        className='flex rounded-[100px] shadow-sm p-2 bg-white border-0 z-10 cursor-pointer relative'
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
          className='absolute top-[2px] border-0 rounded-[100px] w-[32px] h-[32px] transition-all'
          style={{ transform: `translateX(${switcherPosition}px)` , boxShadow: '0px 1px 5px #1117'}}
        ></div>
      </button>
    </div>
  )
}

export default Switch
