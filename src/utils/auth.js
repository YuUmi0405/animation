import Cookies from 'js-cookie'

const TokenKey = 'pic_token'

export function getToken() {
  console.log(Cookies.get())
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
