import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import ApartmentComponent from './components/ApartmentComponnet'
import ApartmentDetailComponent from './components/ApartmentDetailComponent'
import CommentCardComponent from './components/CommentCardComponent'

function App() {
  return (
    <div className="flex-column app">
      <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
      <CommentCardComponent></CommentCardComponent>
      {/* <ApartmentDetailComponent /> */}
    </div>
  )
}

export default App
