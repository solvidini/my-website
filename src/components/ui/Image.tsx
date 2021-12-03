import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

interface IImage {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
  draggable?: boolean
  spinnerClass?: string
}

const Image = ({
  src,
  alt = '',
  className = '',
  style = {},
  draggable = false,
  spinnerClass = '',
}: IImage) => {
  const [isLoaded, setLoaded] = React.useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, opacity: isLoaded ? 1 : 'initial' }}
        draggable={draggable}
        onLoad={onLoad}
      />
      {!isLoaded && (
        <FontAwesomeIcon
          className={['spinner-icon', spinnerClass].join(' ')}
          icon={faSpinner}
          spin
        />
      )}
    </>
  )
}

export default Image
