import React, { useState, useEffect } from 'react'

import Spinner from './components/UI/Spinner/Spinner'
import Layout from './containers/Layout'
import Content from './components/Content/Content'
import logo from './assets/images/logo.png'

// eslint-disable-next-line no-console
console.log(':)')

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const renderApp = () => {
    return (
      <Layout>
        <Content />
      </Layout>
    )
  }

  const renderLoadingScreen = () => {
    return (
      <div className='loadingScreen'>
        <img className='loadingScreen__logo' src={logo} alt='SS' />
        <div className='loadingScreen__animate'>
          <Spinner />
        </div>
      </div>
    )
  }

  return loading ? renderLoadingScreen() : renderApp()
}

export default App
