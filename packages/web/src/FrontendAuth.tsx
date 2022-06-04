import { useNavigate, useLocation, useResolvedPath } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { checkRouterAuth } from './router'
import { useEffect, useState } from 'react'

const RouterBeforeEach = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    const obj = checkRouterAuth(location.pathname)
    const blLogin = localStorage.getItem('token')
    console.log(blLogin)
    if (obj && obj.auth && !blLogin) {
      setAuth(false)
      navigate('/Login')
    } else {
      setAuth(true)
    }
  }, [])
  return auth ? <Outlet /> : null
}

export default RouterBeforeEach
