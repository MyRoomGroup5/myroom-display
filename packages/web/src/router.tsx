/**
 * 定义路由组件，将 auth 设置为 true，表示该路由需要权限校验
 */

import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const routes: any = [
  { path: '/', auth: false, component: lazy(() => import('./FrontendAuth')) },
  { path: '/Login', auth: true, component: lazy(() => import('./pages/Login')) },
  {
    path: '/MyRoom/RoomActivityPage',
    component: lazy(() => import('./pages/RoomActivityPage')),
    auth: true,
  },
  {
    path: '/MyRoom/RoomDetailComponent',
    component: lazy(() => import('./pages/RoomDetailPage')),
    auth: true,
  },
  {
    path: '/MyRoom/RoomCard',
    component: lazy(() => import('./components/RoomCard')),
    auth: true,
  },
  {
    path: '/MyRoom/RoomDetailPage',
    component: lazy(() => import('@/pages/RoomDetailPage')),
    auth: true,
  },
  {
    path: '/MyRoom/ApartmentDetailComponent',
    component: lazy(() => import('./components/ApartmentDetailComponent')),
    auth: true,
  },
  {
    path: '/MyRoom/CommentPageComponent',
    component: lazy(() => import('./components/CommentPageComponent')),
    auth: true,
  },
  {
    path: '*',
    auth: false,
    component: lazy(() => import('./pages/Login')),
  },
]

//根据路径获取路由
const checkAuth = (routers: any, path: string) => {
  for (const data of routers) {
    if (data.path == path) return data
    if (data.children) {
      const res: any = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    )
    return item
  })
}

const MyRouter = () => useRoutes(generateRouter(routes))
const checkRouterAuth = (path: string) => {
  let auth = null
  auth = checkAuth(routes, path)
  return auth
}
export { MyRouter, checkRouterAuth }
