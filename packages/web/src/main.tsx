import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'lib-flexible/flexible.js'
import 'antd/dist/antd.css'
import { WsProvider } from './store/Ws/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WsProvider>
      <App />
    </WsProvider>
  </React.StrictMode>,
)
