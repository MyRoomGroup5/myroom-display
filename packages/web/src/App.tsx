import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import ApartmentComponent from './components/ApartmentComponnet'
import ApartmentDetailComponent from './components/ApartmentDetailComponent'
import CommentCardComponent from './components/CommentCardComponent'
import CommentPageCompnent from './components/CommentPageComponent'
import RoomDetailComponent from './components/RoomDetailCompoment'
import RoomCard from './components/RoomCard'

function App() {
  return (
    <div className="flex-column app">
      {/* <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
      <CommentCardComponent></CommentCardComponent> */}
      {/* <ApartmentComponent></ApartmentComponent> */}
      {/* <ApartmentDetailComponent></ApartmentDetailComponent> */}
      {/* <ApartmentDetailComponent /> */}
      {/* <CommentPageCompnent></CommentPageCompnent> */}
      <RoomDetailComponent></RoomDetailComponent>
      {/* <RoomCard></RoomCard> */}
    </div>
  )
}

export default App
