import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

export const myCache = createCache({
  key: 'css',
  stylisPlugins: [],
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={myCache}>
      <App />
    </CacheProvider>
  </React.StrictMode>,
)
