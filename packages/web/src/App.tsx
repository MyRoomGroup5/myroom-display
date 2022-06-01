import './App.css'
import Login from './pages/Login'
import RoomDetailComponent from './components/RoomDetailCompoment'
import RoomCard from './components/RoomCard'
import RoomDetailPage from '@/pages/RoomDetailPage'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import MapComponent from './components/MapComponent'

function App() {
  return (
    <div className="flex-column app">
      <RoomDetailComponent />
      <RoomCard />
      <RoomDetailPage />
      <Login />
      <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
      <MapComponent></MapComponent>
    </div>
  )
}

export default App
