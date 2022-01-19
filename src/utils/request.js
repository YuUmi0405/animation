import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from './auth'
import { TOKEN } from './index'

const service = axios.create({
  baseURL: '',
  timeout: 60000
})

const ERROR_MESSAGE = {
  4010: '任务的加工时间缺失，请维护基础数据',
  4004: '任务的配方缺失，请维护基础数据',
  4013: '任务的开始时间不得早于前工序的结束时间',
  4014: '任务的结束时间不得晚于后工序任务的开始时间',
  4007: '任务的排产时间与当前设备下已排产的任务存在冲突'
}

service.interceptors.request.use(
  (config) => {
    const token = getToken() || TOKEN
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      if ([4010, 4004, 4013, 4014, 4007].includes(res.code))
        res.message = ERROR_MESSAGE[res.code]
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error) => {
    ElMessage({
      message: error.message || 'Error',
      type: 'error',
      duration: 1000
    })
    return Promise.reject(error)
  }
)

export default service
