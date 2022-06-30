import {axios_post, axios_get} from './request.js'
import da from "element-ui/src/locale/lang/da";

const base_url = 'http://127.0.0.1:5001'
const url_prefix = "/api/v1"
const register_api = base_url + url_prefix + '/register'
const login_api = base_url + url_prefix + '/login'
const banner_api = base_url + url_prefix + '/banners'
const images_api = base_url + url_prefix + '/images'
const collect_or_cancel_api = base_url + url_prefix + '/collect_or_cancel'
const user_info_api = base_url + url_prefix + '/user_info'
const upload_avator_api = base_url + url_prefix + '/user_info'

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

function collect_or_cancel(data) {
    return axios_post(collect_or_cancel_api, data)
}

export function get_user_info() {
    return axios_get(user_info_api)
}

export function upload_avator(data) {
    return axios_post(upload_avator_api, data)
}

export default {
    base_url: base_url,
    register: register,
    login: login,
    get_banner: get_banner,
    get_image_info: get_image_info,
    collect_or_cancel: collect_or_cancel,
    upload_avator: upload_avator_api
}