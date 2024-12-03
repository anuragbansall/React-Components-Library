import React from 'react'

function BannerMessage({children}) {
  return children ? (
    <p className='message'>{children}</p>
  ) : null
}

export default BannerMessage