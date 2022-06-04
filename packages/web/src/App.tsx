import './App.css'

import { BrowserRouter as Router, Routes } from 'react-router-dom'
import RouterBeforeEach from './FrontendAuth'
import { MyRouter } from './router'

function App() {
  return (
    <Router>
      <div className="flex-column app">
        <RouterBeforeEach />
        <MyRouter />
      </div>
    </Router>
  )
}

export default App
