import axios from "axios";
import {getToken} from "../../utils/auth";
import da from "element-ui/src/locale/lang/da";

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

function axios_post(url, data, config) {
    return new Promise((resolve, reject) => {
        service.post(url, data, config).then(res => {
            resolve(res)
        }).catch(err => {
            // console.log(err)
            // err = error ? error : err
            // message.error(err, 1)
            reject(err)
        })
    })
}

function axios_get(url) {
    return new Promise((resolve, reject) => {
        service.get(url).then(res => {
            resolve(res)
        }).catch(err => {
            err = error ? error : err
            message.error(err, 1)
            reject(err)
        })
    })
}


export {
    axios_post,
    axios_get
}