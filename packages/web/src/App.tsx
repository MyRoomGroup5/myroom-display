import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import MapComponent from './components/MapComponent'

function App() {
  return (
    <div className="flex-column app">
      <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
      <MapComponent></MapComponent>
    </div>
  )
}

export default App
