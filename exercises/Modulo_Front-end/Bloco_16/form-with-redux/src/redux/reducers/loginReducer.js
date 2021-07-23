import * as dataUser from '../../dataUser'
const ADMIN_USER = dataUser.admin.find((admin) => admin.email === 'ADMIN')
const ADMIN_STATE = ADMIN_USER

export default function loginReducer(state = ADMIN_STATE, action) {
  switch (action.type) {
    case 'CLIENT_LOGIN':
      return {
        ...state,
        email: state.password === action.password ? alert('Login valido') : alert('Login Invalido'),
      }
      default:
      return state
  }
}