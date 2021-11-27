import React, { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import Spinner from './components/UI/Spinner/Spinner'
import Layout from './containers/Layout'
import Content from './components/Content/Content'
import logo from './assets/images/logo.png'
import { ImageLoaderContext } from './utils/imageLoaderContext'

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
      <div className='loading-screen'>
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
