import {Message} from 'element-ui'
import api from './api'

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