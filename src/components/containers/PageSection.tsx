'use client'

import { ColorModes } from '@/lib/constants/colorModeConstants'
import { THEME_COLOR } from '@/lib/constants/commonConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import { PageSectionType } from '@/types/types'
import React from 'react'

const h2Class =
  'text-xl sm:text-3xl text-white px-6 inline-block text-[1.2rem] font-extralight relative shadow-[0px_2px_3px_#0004] -ml-6 sm:-ml-10 mb-[30px] pl-5 p-2.5 before:content-[""] before:block before:absolute before:w-0 before:h-0 before:border-l-[none] before:border-l-[#0000] before:border-r-[#255] before:border-t-[#255] before:border-b-[#0000] before:border-solid before:border-[7px] before:left-0 before:-bottom-3.5 left-[-6px] top-[-10px]'

const divClasses =
  'relative pt-10 flex w-full min-[1280px]:w-[480px] max-[1280px]:justify-center'

const PageSection = ({
  heading,
  children,
  sideGraphic,
  svg
}: PageSectionType) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  return (
    <section
      className='p-4 sm:p-8 pb-6 relative shadow-sm rounded-sm'
      style={{ background: ColorModes[colorModeValue].sectionBg }}
    >
      <h2 className={h2Class} style={{ background: THEME_COLOR }}>
        {heading}
      </h2>
      <div className='flex flex-col-reverse min-[1280px]:flex-row justify-between relative'>
        {sideGraphic === 'left' && (
          <div className={divClasses + ' mr-8'}>{svg}</div>
        )}
        <div className='flex-auto'>{children}</div>
        {sideGraphic === 'right' && <div className={divClasses}>{svg}</div>}
      </div>
    </section>
  )
}

export default PageSection
