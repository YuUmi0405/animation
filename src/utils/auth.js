import Cookie from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookie.get(TokenKey)
}

export function setToke(token) {
  return Cookie.set(TokenKey, token)
}

export function removeToken() {
  return Cookie.remove(TokenKey)
}
