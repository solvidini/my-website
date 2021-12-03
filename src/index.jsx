import React from 'react'
import ReactDOM from 'react-dom'
import 'src/i18n'
import 'src/sass/root.scss'

import * as serviceWorker from 'src/serviceWorker'
import App from 'src/App'
import { ImageLoaderProvider } from 'src/utils/ImageLoaderContext'

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
