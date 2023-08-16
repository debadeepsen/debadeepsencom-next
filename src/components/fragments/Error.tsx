import React from 'react'

const ErrorFragment = ({ text, slug }: { text?: string; slug?: string }) => {
  return (
    <div className='mt-20 w-full lg:w-[800px] xl:w-[1024px] min-[2000px]:w-[80%] mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-red-500'>Error!</h1>
      <div>
        {text || 'An unexpected error occurred.'} {slug && <code>{slug}</code>}
      </div>
    </div>
  )
}

export default ErrorFragment
