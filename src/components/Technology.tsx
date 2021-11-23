import React from 'react'

interface Props {
  src: string
  name: string
  styles?: React.CSSProperties
}

const Technology = (props: Props) => {
  const { src, name, styles = {} } = props

  return (
    // <Effect>
    <div className='technologies__item' style={styles}>
      <img className='technologies__item-image' src={src} alt={name} />
      <div className='technologies__item-label'>{name}</div>
    </div>
    // </Effect>
  )
}

export default Technology
