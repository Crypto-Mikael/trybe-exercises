export function loginUser(email,password) {
  return {
    type: 'CLIENT_LOGIN',
    email,
    password,
  }
}