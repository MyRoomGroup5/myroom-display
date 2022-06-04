import axios from 'axios'
import { useEffect } from 'react'
import './App.css'
import Login from './pages/Login'
import RoomDetailComponent from './components/RoomDetailCompoment'
import RoomCard from './components/RoomCard'
import RoomDetailPage from '@/pages/RoomDetailPage'
import RoomActivityPage from './pages/RoomActivityPage'
import roomDetailData from './mock/roomDetailData.json'
import activityData from './mock/activityData.json'

function App() {
  useEffect(() => {
    console.log('开始请求数据')
    axios
      .get('https://easydoc.net/mock/rJSvw8AF/p/38281680/B8YstYrl')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  })

  return (
    <div className="flex-column app">
      {/* <RoomDetailComponent />
      <RoomCard />
      <RoomDetailPage />
      <Login /> */}
      <RoomActivityPage />
    </div>
  )
}

export default App
