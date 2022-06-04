import PriceComponent from '@/components/PriceComponent'
import MapComponent from '@/components/MapComponent'
import ApartmentComponent from '@/components/ApartmentComponnet'
import CommentCardComponent from '@/components/CommentCardComponent'
import CommentPageComponent from '../../components/CommentPageComponent'
import style from './style.module.css'

const RoomDetailPage = () => {
  return (
    <div className={style.flexColumn}>
      <ApartmentComponent apartmentId="1" />
      <CommentCardComponent />
      <MapComponent />
      <PriceComponent />
    </div>
  )
}

export default RoomDetailPage
