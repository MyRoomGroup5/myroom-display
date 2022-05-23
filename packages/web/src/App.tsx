import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import ApartmentComponent from './components/ApartmentComponnet'
import ApartmentDetailComponent from './components/ApartmentDetailComponent'
function App() {
  return (
    <div className="flex-column app">
      {/* <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent> */}
      {/* <ApartmentComponent></ApartmentComponent> */}
      <ApartmentDetailComponent />
    </div>
  )
}

export default App
