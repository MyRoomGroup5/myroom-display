import axios, { AxiosResponse } from 'axios'

const requests = axios.create({
  baseURL: '/api/v1',
  //  请求超时时间
  timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data)
    const token = localStorage.getItem('token')
    config.headers = {
      'Content-Type': 'application/json',
    }
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
requests.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.code === 200) {
      return res.data
    }
    return Promise.reject(res.data)
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

export default requests
