import { useEffect } from 'react'
import './style.css'

export default function MapComponent() {
  useEffect(() => {
    const map = new BMapGL.Map('map-container') // 创建地图实例
    const point = new BMapGL.Point(118.030164, 24.494915) // 创建点坐标
    map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
    const marker = new BMapGL.Marker(point) // 创建标注
    map.addOverlay(marker) // 将标注添加到地图中
    map.enableScrollWheelZoom() //开启鼠标滚轮缩放
  })
  return (
    <div className="map-component">
      <h2>地理位置</h2>
      <div id="map-container" className="map"></div>
    </div>
  )
}
