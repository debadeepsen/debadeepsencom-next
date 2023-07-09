import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className='block bg-white p-4 my-4 shadow-sm'>{children}</div>
}

export default Card
