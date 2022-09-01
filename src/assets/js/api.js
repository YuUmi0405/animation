import {axios_post, axios_get} from './request.js'
import da from "element-ui/src/locale/lang/da";

const base_url = '/api'
const url_prefix = "/api/v1"
//注册登录
const register_api = base_url + url_prefix + '/register'
const login_api = base_url + url_prefix + '/login'

//轮播图
const banner_api = base_url + url_prefix + '/banners'

//插图列表
const images_api = base_url + url_prefix + '/images'

//收藏取消收藏
const collect_or_cancel_api = base_url + url_prefix + '/collect_or_cancel'

//用户信息
const user_info_api = base_url + url_prefix + '/user_info'

//上传用户头像
const upload_avatar_api = base_url + url_prefix + '/upload_avatar'

//用户关联的插画信息
const user_rel_image_api = base_url + url_prefix + '/user_rel_image'

//插画详情
const image_detail_api = base_url + url_prefix + '/image_detail'

//图片上传
const upload_image_api = base_url + url_prefix + '/upload_image'

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

function get_user_rel_image(page, page_size) {
    let user_rel_image_api
    user_rel_image_api = (images_api + "?page=" + page + "&page_size=" + page_size)
    return axios_get(user_rel_image_api)

}

export function get_user_info() {
    return axios_get(user_info_api)
}

function get_image_detail(image_id) {
    let image_detail
    image_detail = (image_detail_api + "?image_id=" + image_id)
    return axios_get(image_detail)

}

function upload_image(data) {
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    return axios_post(upload_image_api, data, config)

}


export default {
    base_url: base_url,
    register: register,
    login: login,
    get_banner: get_banner,
    get_image_info: get_image_info,
    collect_or_cancel: collect_or_cancel,
    upload_avatar_api: upload_avatar_api,
    get_user_rel_image: get_user_rel_image,
    get_image_detail: get_image_detail,
    upload_image: upload_image
}