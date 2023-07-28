import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  return <div className='block bg-white p-4 my-4 sm:mx-8 sm:ml-0 shadow-md min-w-[120px] w-fit'>{children}</div>
}

export default Card
