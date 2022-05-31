import './App.css'
import Login from './pages/Login'
import RoomDetailComponent from './components/RoomDetailCompoment'
import RoomCard from './components/RoomCard'
import RoomDetailPage from '@/pages/RoomDetailPage'

function App() {
  return (
    <div className="flex-column app">
      <RoomDetailComponent />
      <RoomCard />
      <RoomDetailPage />
      <Login />
    </div>
  )
}

export default App
