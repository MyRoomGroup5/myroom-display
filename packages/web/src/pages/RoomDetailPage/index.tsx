import PriceComponent from '@/components/PriceComponent'
import CarouselComponent from '@/components/CarouselComponent'
import MapComponent from '@/components/MapComponent'
import ApartmentComponent from '@/components/ApartmentComponnet'
import CommentCardComponent from '@/components/CommentCardComponent'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { reqHouseDetail } from '../../api'
import RoomDetailComponent from '../../components/RoomDetailCompoment'

const RoomDetailPage = () => {
  const [onEnd, setEnd] = useState(false)
  const [price, setPrice] = useState()
  const [location, setLocation] = useState()
  useEffect(() => {
    reqHouseDetail(123435).then((res: any) => {
      if (res.code === 200) {
        setPrice(res.data.price)
        setLocation(res.data.location)
        setEnd(true)
      }
    })
  }, [])
  if (onEnd) {
    return (
      <div className={style.flexColumn}>
        <CarouselComponent />
        <RoomDetailComponent />
        <ApartmentComponent apartmentId="1" />
        <CommentCardComponent />
        <MapComponent location={location} />
        <PriceComponent price={price} />
      </div>
    )
  } else {
    return <h1>加载中......</h1>
  }
}

export default RoomDetailPage
