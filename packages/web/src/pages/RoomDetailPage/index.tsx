import PriceComponent from '@/components/PriceComponent'
import CarouselComponent from '@/components/CarouselComponent'
import ApartmentComponent from '@/components/ApartmentComponnet'
import ApartmentDetailComponent from '@/components/ApartmentDetailComponent'
import CommentCardComponent from '@/components/CommentCardComponent'
import CommentPageComponent from '../../components/CommentPageComponent'
import style from './style.module.css'

const RoomDetailPage = () => {
  return (
    <div className={style.flexColumn}>
      <CarouselComponent />
      <ApartmentComponent apartmentId="1" />
      <CommentCardComponent />
      <PriceComponent />
      {/*<ApartmentDetailComponent/>*/}
      <CommentPageComponent />
    </div>
  )
}

export default RoomDetailPage
