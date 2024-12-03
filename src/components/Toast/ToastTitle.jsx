import React from 'react'

function ToastTitle({children}) {
  return children ? (
    <h2 className='title'>ToastTitle</h2>
  ) : null
}

export default ToastTitle