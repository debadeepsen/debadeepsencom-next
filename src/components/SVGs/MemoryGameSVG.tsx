const MemoryGameSVG = () => {
  return (
    <svg
      viewBox='0 0 128 128'
      role='img'
      aria-label='Memory game icon'
      className='w-[90px] h-[90px]'
    >
      <defs>
        <linearGradient id='mg-a' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#34d399' />
          <stop offset='100%' stopColor='#0f766e' />
        </linearGradient>
        <linearGradient id='mg-b' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#f59e0b' />
          <stop offset='100%' stopColor='#ea580c' />
        </linearGradient>
      </defs>
      <rect x='16' y='22' width='44' height='56' rx='8' fill='url(#mg-a)' />
      <rect x='68' y='50' width='44' height='56' rx='8' fill='url(#mg-b)' />
      <rect
        x='16'
        y='22'
        width='44'
        height='56'
        rx='8'
        fill='none'
        stroke='#0f172a'
        strokeWidth='4'
      />
      <rect
        x='68'
        y='50'
        width='44'
        height='56'
        rx='8'
        fill='none'
        stroke='#0f172a'
        strokeWidth='4'
      />
      <circle cx='38' cy='50' r='8' fill='#ecfeff' />
      <path d='M90 76h8m-4-4v8' stroke='#fff7ed' strokeWidth='4' />
    </svg>
  )
}

export default MemoryGameSVG
