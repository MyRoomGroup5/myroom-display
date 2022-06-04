import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

import activityData from './mock/activityData.json'

import { BrowserRouter as Router, Routes } from 'react-router-dom'
import RouterBeforeEach from './FrontendAuth'
import { MyRouter } from './router'

function App() {
  useEffect(() => {
    console.log('开始请求数据')
    axios
      .get('https://easydoc.net/mock/rJSvw8AF/p/38281680/B8YstYrl')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  })

  return (
    <Router>
      <div className="flex-column app">
        <RouterBeforeEach></RouterBeforeEach>
        <MyRouter></MyRouter>
      </div>
    </Router>
  )
}

export default App
