import React from 'react'

import headerImageSrc from '../assets/images/ssazero-background-dark.jpg'
import transparentLogoSrc from '../assets/images/logo-transparent.png'
import justMeSrc from '../assets/images/me.png'

interface IImages {
  [imageName: string]: string
}

interface IImageLoaderContext {
  areImagesLoaded: boolean
  images: IImages
}

export const ImageLoaderContext = React.createContext<IImageLoaderContext>({
  areImagesLoaded: false,
  images: {},
})

const preloadImages = [
  {
    src: headerImageSrc,
    name: 'headerImage',
  },
  {
    src: transparentLogoSrc,
    name: 'transparentLogo',
  },
  {
    src: justMeSrc,
    name: 'justMe',
  },
]

export const ImageLoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [areImagesLoaded, setImagesLoaded] = React.useState<boolean>(false)
  const [numberOfImagesLoaded, setNumberOfImagesLoaded] = React.useState<number>(0)
  const [images, setImages] = React.useState<IImages>({})

  React.useEffect(() => {
    if (numberOfImagesLoaded === preloadImages.length) {
      setImagesLoaded(true)
    }
  }, [numberOfImagesLoaded])

  React.useEffect(() => {
    preloadImages.forEach(image => {
      const img = new Image()
      img.src = image.src
      img.onload = () => {
        setImages(prevState => {
          return { ...prevState, [image.name]: image.src }
        })
        setNumberOfImagesLoaded(prevState => prevState + 1)
      }
    })
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
