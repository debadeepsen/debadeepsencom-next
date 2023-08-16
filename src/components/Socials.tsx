import React from 'react'

const Socials = () => {
  return (
    <>
      <div className='icons text-center'>
        <a href='https://dev.to/debadeepsen' target='_blank' aria-label='dev.to link'>
          <i className='fab fa-dev' aria-hidden='true' />{' '}
        </a>
        <a href='https://github.com/debadeepsen' target='_blank' aria-label='github link'>
          <i className='fab fa-github' aria-hidden='true' />{' '}
        </a>
        <a href='https://www.linkedin.com/in/debadeep/' target='_blank' aria-label='linkedin link'>
          <i className='fab fa-linkedin' aria-hidden='true' />
        </a>
      </div>
      <div style={{ height: 300 }} />
    </>
  )
}

export default Socials
