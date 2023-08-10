'use client'

import React, { useEffect } from 'react'

const AddCopyButton = () => {
  useEffect(() => {
    document.body.querySelectorAll('pre').forEach(pre => {
      const content = pre.textContent
      const btn = document.createElement('button')
      btn.className = 'far fa-copy'
      btn.title = 'Copy to clipboard'
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(content || '')
        btn.title = 'Copied!'
        setTimeout(() => {
          btn.title = 'Copy to clipboard'
        }, 2000)
      })

      pre.append(btn)
    })
  })

  return <></>
}

export default AddCopyButton
