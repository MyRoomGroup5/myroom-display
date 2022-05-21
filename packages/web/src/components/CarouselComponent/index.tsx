import { Swiper } from 'antd-mobile'
import './style.css'
import figure1 from '../../asset/images/1.jpg'
import figure2 from '../../asset/images/2.jpg'
import figure3 from '../../asset/images/3.jpg'

export default function CarouselComponent() {
  const figures = [
    {
      url: figure1,
      size: '640*82',
      type: 'realShot',
      desc: '客厅',
    },
    {
      url: figure2,
      size: '640*82',
      type: 'realShot',
      desc: '卧室',
    },
    {
      url: figure3,
      size: '640*82',
      type: 'houseType',
      desc: '户型',
    },
  ]
  const items = figures.map((item, index) => (
    <Swiper.Item key={index}>
      <div>
        <img src={item.url} alt={item.desc} className="item-content"></img>
      </div>
    </Swiper.Item>
  ))
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
