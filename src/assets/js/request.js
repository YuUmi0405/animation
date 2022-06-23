import axios from "axios";
import {getToken} from "../../utils/auth";

const service = axios.create({
  baseURL: '',
  timeout: 60000
})

service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

async function axios_post(url, data) {
    let res_data
    await service.post(url, data).then(res => {
        res_data = res.data
    }).catch(err => {
        console.log(err)
    })
    return res_data
}

async function axios_get(url) {
    let res_data
    await service.get(url).then(res => {
        res_data = res.data
    }).catch(err => {
        console.log(err)
    })
    return res_data
}


export {
    axios_post,
    axios_get
}