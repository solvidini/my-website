import React from 'react'
import { isMobile } from 'react-device-detect'

import Image from 'src/components/ui/Image'

interface Props {
  src: string
  name: string
  styles?: React.CSSProperties
  highlight?: boolean
  id: string
}

const Technology = (props: Props) => {
  const { src, name, styles = {}, highlight, id } = props
  const [isActive, setIsActive] = React.useState<boolean>(false)

  const classesItem = ['technologies__item']
  const classesLabel = ['technologies__item-label']

  if (highlight) {
    classesItem.push('technologies__item--highlight')
  }
  if (isActive) {
    classesItem.push('technologies__item--active')
    classesLabel.push('technologies__item-label--active')
  }

  return (
    <div
      id={id}
      className={classesItem.join(' ')}
      style={styles}
      onClick={() => {
        setIsActive(prevState => !prevState)
      }}
      onMouseEnter={() => {
        !isMobile ? setIsActive(true) : null
      }}
      onMouseLeave={() => {
        setIsActive(false)
      }}
    >
      <Image className='technologies__item-image' src={src} alt={name} spinnerClass='' />
      <div className={classesLabel.join(' ')}>{name}</div>
    </div>
  )
}

export default Technology
