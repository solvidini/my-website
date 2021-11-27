import React from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import './sass/root.scss'

import * as serviceWorker from './serviceWorker'
import App from './App'
import { ImageLoaderProvider } from './utils/imageLoaderContext'

ReactDOM.render(
  <React.Suspense fallback='Loading...'>
    <ImageLoaderProvider>
      <App />
    </ImageLoaderProvider>
  </React.Suspense>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
