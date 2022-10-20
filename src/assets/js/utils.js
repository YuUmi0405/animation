import {Message} from 'element-ui'
import api from './api'
import {DURATION} from "./settings";

export function valid_status(res, message = {}) {
    if (res.data.code !== 200) {
        Message.error({
            message: message.fail ? message.fail : res.data.message,
            duration: DURATION
        })

        return false
    }
    Message.success({
        message: message.success ? message.success : res.data.message,
        duration: DURATION
    })

    return true
}

export function get_static_image_url(url) {
    return api.base_url + url
}

export function objectToFormData(obj) {
    let formData = new FormData();
    Object.keys(obj).forEach((key) => {
        if (obj[key] instanceof Array) {
            formData.append(key, JSON.stringify(obj[key]));
            return;
        }
        formData.append(key, obj[key]);
    });
    return formData;
}