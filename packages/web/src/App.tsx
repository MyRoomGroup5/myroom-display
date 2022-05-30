import './App.css'

import RoomDetailComponent from './components/RoomDetailCompoment'
import RoomCard from './components/RoomCard'
import RoomDetailPage from '@/pages/RoomDetailPage'

function App() {
  return (
    <div className="flex-column app">
      <RoomDetailComponent></RoomDetailComponent>
      <RoomCard></RoomCard>
      <RoomDetailPage />
    </div>
  )
}

export default App
