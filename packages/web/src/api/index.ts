import requests from '@/api/Request'
import { registerObj } from './type'

// 注册接口
export const reqUserReg = (data: registerObj) =>
  requests({ url: '/user/register', data, method: 'post' })

// 登录接口
export const reqUserLogin = (data: registerObj) =>
  requests({ url: '/user/login', data, method: 'post' })
