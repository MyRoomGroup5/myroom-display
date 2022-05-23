import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import CommentCardComponent from './components/CommentCardComponent'

function App() {
  return (
    <div className="flex-column app">
      <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
      <CommentCardComponent></CommentCardComponent>
    </div>
  )
}

export default App
