import axios from "axios";

import {Message} from 'element-ui'


async function axios_post(url, data) {
    let res_data
    await axios.post(url, data).then(res => {
        if (res.data.code !== 200) {
            Message.error({
                message: res.data.message,
                duration: 1000
            })
        }
        res_data = res.data
    }).catch(err => {
        console.log(err)
    })
    return res_data
}

async function axios_get(url) {
    let res_data
    await axios.get(url).then(res => {
        if (res.data.code !== 200) {
            Message.error({
                message: res.data.message,
                duration: 1000
            })
        }
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