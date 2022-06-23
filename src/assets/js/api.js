import {axios_post, axios_get} from './request.js'

const base_url = 'http://127.0.0.1:5000'
const url_prefix = "/api/v1"
const register_api = base_url + url_prefix + '/register'
const login_api = base_url + url_prefix + '/login'
const banner_api = base_url + url_prefix + '/banners'
const images_api = base_url + url_prefix + '/images'

function register(data) {
    return axios_post(register_api, data)
}

function login(data) {
    return axios_post(login_api, data)
}

function get_banner(page, page_size) {
    let get_banner_api
    get_banner_api = (banner_api + "?page=" + page + "&page_size=" + page_size)
    return axios_get(get_banner_api)

}

function get_image_info(page, page_size) {
    let get_image_list
    get_image_list = (images_api + "?page=" + page + "&page_size=" + page_size)
    return axios_get(get_image_list)

}

export default {
    base_url: base_url,
    register: register,
    login: login,
    get_banner: get_banner,
    get_image_info: get_image_info
}