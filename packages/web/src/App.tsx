import './App.css'
import PriceComponent from './components/PriceComponent'
import CarouselComponent from './components/CarouselComponent'
import ApartmentComponent from './components/ApartmentComponnet'
import ApartmentDetailComponent from './components/ApartmentDetailComponent'
import CommentCardComponent from './components/CommentCardComponent'
import Login from './pages/Login'
import CommentPageCompnent from './components/CommentPageComponent'

function App() {
  return (
    <div className="flex-column app">
      {/* <CarouselComponent></CarouselComponent>
      <PriceComponent></PriceComponent>
      <CommentCardComponent></CommentCardComponent> */}
      {/* <ApartmentComponent></ApartmentComponent> */}
      {/* <ApartmentDetailComponent></ApartmentDetailComponent> */}
      {/* <ApartmentDetailComponent /> */}
      <Login />
      <CommentPageCompnent></CommentPageCompnent>
    </div>
  )
}

export default App
