import React from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='p-4 sm:p-8 w-auto md:w-3/4 md:mx-auto xl:w-[3/4] min-[2800px]:w-[2000px]'>{children}</main>
  )
}

export default Main
