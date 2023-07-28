import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  return <div className='block bg-white p-4 my-4 shadow-sm min-w-[120px] w-fit'>{children}</div>
}

export default Card
