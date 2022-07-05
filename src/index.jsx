import React from 'react'
import { createRoot } from 'react-dom/client'
import 'src/i18n'
import 'src/sass/root.scss'

import * as serviceWorker from 'src/serviceWorker'
import App from 'src/App'
import { ImageLoaderProvider } from 'src/utils/image-loader-context'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.Suspense fallback='Loading...'>
    <ImageLoaderProvider>
      <App />
    </ImageLoaderProvider>
  </React.Suspense>,
)

serviceWorker.unregister()
