import { Swiper } from 'antd-mobile'
import { Key } from 'react'
import './style.css'
// import figure1 from '../../asset/images/1.jpg'
// import figure2 from '../../asset/images/2.jpg'
// import figure3 from '../../asset/images/3.jpg'

interface figureType {
  url: string
  size: string
  type: string
  desc: string
}

const CarouselComponent = (figures: any) => {
  const items = figures.map(
    (
      item: { url: string | undefined; desc: string | undefined },
      index: Key | null | undefined,
    ) => (
      <Swiper.Item key={index}>
        <div>
          <img src={item.url} alt={item.desc} className="item-content"></img>
        </div>
      </Swiper.Item>
    ),
  )
  return (
    <div className="carousel-component">
      <Swiper
        indicator={(total, current) => (
          <div className="customIndicator">{`${current + 1} / ${total}`}</div>
        )}
      >
        {items}
      </Swiper>
    </div>
  )
}

export default CarouselComponent
