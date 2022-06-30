import {Message} from 'element-ui'
import {get_user_info} from './api'
export function valid_status(res) {
    if (res.data.code !== 200) {
        Message.error({
            message: res.data.message,
            duration: 1000
        })
        return false
    }
    return true
}

