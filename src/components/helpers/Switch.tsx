import React, { ReactNode, useState } from 'react'

export type OptionType = { element?: ReactNode; value: string }
export type OptionsProp = {
  options: OptionType[]
  onChange?: (value: string) => void
}

const Switch = ({ options, onChange }: OptionsProp) => {
  const [leftOption, rightOption] = options
  const [switcherStyle, setSwitcherStyle] = useState<{
    left?: number
    right?: number
  }>({
    left: 1
  })

  const [value, setValue] = useState(leftOption.value)
  const [state, setState] = useState<'left' | 'right'>('left')

  const setCurrentValue = () => {
    const newStyle = state === 'left' ? { right: 1 } : { left: 1 }
    const newValue = state === 'left' ? rightOption.value : leftOption.value
    const newState = state === 'left' ? 'right' : 'left'

    setSwitcherStyle(newStyle)
    setValue(newValue)
    setState(newState)

    onChange?.(value)
  }

  return (
    <div className='flex fixed left-[40px] top-[40px]'>
      <button
        className='flex rounded-[100px] shadow-md p-2 bg-white border-0 z-10 cursor-pointer relative'
        onClick={() => setCurrentValue()}
      >
        <div className='flex justify-center items-center'>
          {leftOption.element ?? leftOption.value}
        </div>
        <div className='w-[20px]'></div>
        <div className='flex justify-center items-center'>
          {rightOption.element ?? rightOption.value}
        </div>
        <div
          className='absolute top-[1px] border border-solid border-gray-300 rounded-[100px] w-[32px] h-[32px] shadow-sm transition-all'
          style={switcherStyle}
        ></div>
      </button>
    </div>
  )
}

export default Switch
