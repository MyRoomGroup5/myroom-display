import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'

function App() {
  return (
    <div className="flex-column app">
      <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
    </div>
  )
}

export default App
