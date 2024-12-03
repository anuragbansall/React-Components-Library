import React from 'react'

function ToastMessage({children}) {
  return children ? (
    <p className='message'>{children}</p>
  ) : null
}

export default ToastMessage