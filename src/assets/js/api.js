import {axios_post} from './request.js'

const base_url = 'http://127.0.0.1:5000/api/v1'
const register_api = base_url + '/register'
const login_api = base_url + '/login'


async function register(data) {
    return await axios_post(register_api, data)
}

async function login(data) {
    return await axios_post(login_api, data)
}

export default {
    register: register,
    login: login
}