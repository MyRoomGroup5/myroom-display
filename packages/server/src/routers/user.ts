import Router from 'koa-router'
import { register, login } from '../handle/user'

const router_user = new Router({
  prefix: '/api/v1/user',
})

// 用户注册
router_user.post('/register', register)

// 用户登录
router_user.post('/login', login)

export { router_user }
