import axios from 'axios'

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
  (res: any) => {
    return res.data
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

export default requests
