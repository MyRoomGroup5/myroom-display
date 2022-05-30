import requests from '@/api/Request'
import { registerObj, loginObj } from './type'

// 注册接口
export const reqUserReg = (data: registerObj) =>
  requests({ url: '/user/register', data, method: 'post' })

// 登录接口
export const reqUserLogin = (data: loginObj) =>
  requests({ url: '/user/login', data, method: 'post' })
