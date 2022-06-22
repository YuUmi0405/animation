import axios from "axios";

import {Message} from 'element-ui'


async function axios_post(url, data) {
    console.log(data)
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

export {
    axios_post
}