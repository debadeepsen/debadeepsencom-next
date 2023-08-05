'use client'

import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollTop(window.scrollY))
  }, [])

  return (
    <button
      className='fixed bottom-0 right-[8px] z-[60] p-4 px-5 border-0 rounded-t-lg bg-white dark:bg-[#201c26] shadow-sm dark:text-white cursor-pointer transition-all'
      style={{
        boxShadow: '0px 0px 3px #1114',
        opacity: Number(scrollTop > document.documentElement.scrollHeight * 0.3)
      }}
      title='Back to top'
      onClick={() =>
        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0
        })
      }
    >
      <i className='fas fa-arrow-up'></i>
    </button>
  )
}

export default BackToTop
