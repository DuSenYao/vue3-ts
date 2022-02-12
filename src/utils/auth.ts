const TOKEN_NAME = 'token';

export function getToken() {
  return sessionStorage.getItem(TOKEN_NAME);
}

export function setToken(val: string) {
  sessionStorage.setItem(TOKEN_NAME, val);
}
