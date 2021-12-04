import React, { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import Spinner from 'src/components/ui/Spinner/Spinner'
import Layout from 'src/containers/Layout'
import Content from 'src/components/content/Content'
import logo from 'src/assets/images/logo.png'
import { ImageLoaderContext } from 'src/utils/ImageLoaderContext'

gsap.registerPlugin(ScrollTrigger)

// eslint-disable-next-line no-console
console.log(':)')

function App() {
  const { areImagesLoaded } = React.useContext(ImageLoaderContext)
  const [isLoading, setLoading] = useState(true)
  const lsLogoRef = React.useRef(null)
  const lsSpinnerRef = React.useRef(null)

  React.useEffect(() => {
    gsap.fromTo(
      lsLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.3,
        ease: 'power1',
      },
    )
    gsap.fromTo(
      lsSpinnerRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.2,
        ease: 'power1',
      },
    )
  }, [])

  useEffect(() => {
    if (areImagesLoaded) {
      setTimeout(() => {
        gsap.fromTo(
          lsLogoRef.current,
          {
            opacity: 0.3,
          },
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power1',
          },
        )
        gsap.fromTo(
          lsSpinnerRef.current,
          {
            scale: 1.2,
            filter: 'grayscale(0)',
          },
          {
            scale: 0,
            filter: 'grayscale(1)',
            duration: 0.3,
            ease: 'power1',
          },
        )
      }, 700)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [areImagesLoaded])

  const renderLoadingScreen = () => {
    return (
      <div data-testid='loading-screen' className='loading-screen'>
        <img className='loading-screen__logo' src={logo} alt='SS' ref={lsLogoRef} />
        <div ref={lsSpinnerRef}>
          <Spinner />
        </div>
      </div>
    )
  }

  const renderApp = () => {
    return (
      <Layout>
        <Content />
      </Layout>
    )
  }

  return isLoading ? renderLoadingScreen() : renderApp()
}

export default App
