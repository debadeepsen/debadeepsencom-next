'use client'

import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import Switch from './Switch'

const ColorModeChanger = () => {
  const colorMode = useAppSelector((state: RootState) => state.colorMode.value)

  return (
    <div>
      <Switch
        options={[
          {
            element: <i className='fas fa-sun' style={{ fontSize: 20 }}></i>,
            value: 'Sun'
          },
          {
            element: (
              <i
                className='fas fa-moon'
                style={{ fontSize: 16, position: 'relative', top: 2 }}
              ></i>
            ),
            value: 'Moon'
          }
        ]}
      />
    </div>
  )
}

export default ColorModeChanger
