import classNames from 'classnames'
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

  return (
    <div
      id={id}
      className={classNames(
        'technologies__item',
        highlight && 'technologies__item--highlight',
        isActive && 'technologies__item--active',
      )}
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
      <div
        className={classNames(
          'technologies__item-label',
          isActive && 'technologies__item-label--active',
        )}
      >
        {name}
      </div>
    </div>
  )
}

export default Technology
