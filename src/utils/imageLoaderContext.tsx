import React from 'react'

import headerImageSrc from '../assets/images/ssazero-background-dark.jpg'

interface IImageLoaderContext {
  areImagesLoaded: boolean
  images: {
    [imageName: string]: string
  }
}

export const ImageLoaderContext = React.createContext<IImageLoaderContext>({
  areImagesLoaded: false,
  images: {},
})

export const ImageLoaderProvider: React.FC = ({ children }) => {
  const [areImagesLoaded, setImagesLoaded] = React.useState(false)
  const [images, setImages] = React.useState({})

  React.useEffect(() => {
    const img = new Image()
    img.src = headerImageSrc
    img.onload = () => {
      setImages(prevState => {
        return { ...prevState, headerImage: headerImageSrc }
      })
      setImagesLoaded(true)
    }
  }, [])

  return (
    <ImageLoaderContext.Provider
      value={{
        areImagesLoaded,
        images,
      }}
    >
      {children}
    </ImageLoaderContext.Provider>
  )
}
