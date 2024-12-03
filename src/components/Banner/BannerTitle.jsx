import React from 'react'

function BannerTitle({children}) {
  return children ? (
    <h2 className='title'>{children}</h2>
  ) : null
}

export default BannerTitle