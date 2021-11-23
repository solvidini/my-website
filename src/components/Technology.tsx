import React from 'react'

interface Props {
  src: string
  name: string
  styles?: React.CSSProperties
}

const Technology = (props: Props) => {
  const { src, name, styles = {} } = props
  const [isActive, setIsActive] = React.useState<boolean>(false)

  const classesItem = ['technologies__item']
  const classesLabel = ['technologies__item-label']

  if (isActive) {
    classesItem.push('technologies__item--active')
    classesLabel.push('technologies__item-label--active')
  }

  return (
    <div
      className={classesItem.join(' ')}
      style={styles}
      onClick={() => setIsActive(prevState => !prevState)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img className='technologies__item-image' src={src} alt={name} />
      <div className={classesLabel.join(' ')}>{name}</div>
    </div>
  )
}

export default Technology
