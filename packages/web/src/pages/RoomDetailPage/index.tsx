import PriceComponent from '@/components/PriceComponent'
import CarouselComponent from '@/components/CarouselComponent'
import MapComponent from '@/components/MapComponent'
import ApartmentComponent from '@/components/ApartmentComponnet'
import ApartmentDetailComponent from '@/components/ApartmentDetailComponent'
import CommentCardComponent from '@/components/CommentCardComponent'
import CommentPageComponent from '../../components/CommentPageComponent'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { reqHouseDetail } from '../../api'

interface figureType {
  url: string
  size: string
  type: string
  desc: string
}

const RoomDetailPage = () => {
  const [figure, setFigure] = useState<figureType[]>([])
  const [price, setPrice] = useState()
  const [location, setLocation] = useState()
  useEffect(() => {
    reqHouseDetail(123435).then((res) => {
      if (res.status === 200) {
        setFigure(res.data.figure)
        setPrice(res.data.price)
        setLocation(res.data.location)
      }
    })
  })

  return (
    <div className={style.flexColumn}>
      <CarouselComponent figures={figure} />
      <ApartmentComponent apartmentId="1" />
      <CommentCardComponent />
      <MapComponent />
      <PriceComponent price={price} />
      {/*<ApartmentDetailComponent/>*/}
      <CommentPageComponent />
    </div>
  )
}

export default RoomDetailPage
