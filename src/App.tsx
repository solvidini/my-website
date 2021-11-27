import React, { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import Spinner from './components/UI/Spinner/Spinner'
import Layout from './containers/Layout'
import Content from './components/Content/Content'
import logo from './assets/images/logo.png'

gsap.registerPlugin(ScrollTrigger)

// eslint-disable-next-line no-console
console.log(':)')

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const renderLoadingScreen = () => {
    return (
      <div className='loading-screen'>
        <img className='loading-screen__logo' src={logo} alt='SS' />
        <div className='loading-screen__spinner'>
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
