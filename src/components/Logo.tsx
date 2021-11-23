import React from 'react'

const Logo: React.FC<{ styles?: React.CSSProperties; transparent?: boolean }> = ({
  styles = {},
  transparent,
}) => (
  <div className={`logo${transparent && ' logo-transparent'}`} style={styles}>
    &nbsp;
  </div>
)

export default Logo
