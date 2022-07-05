import React from 'react'

import { ImageLoaderContext } from 'src/utils/image-loader-context'

const Logo: React.FC<{ styles?: React.CSSProperties; transparent?: boolean }> = ({
  styles = {},
  transparent,
}) => {
  const { images } = React.useContext(ImageLoaderContext)
  const transparentStyles = transparent
    ? {
        backgroundImage: `url(${images.transparentLogo})`,
      }
    : {}

  return (
    <div className='logo' style={{ ...styles, ...transparentStyles }}>
      &nbsp;
    </div>
  )
}

export default Logo
