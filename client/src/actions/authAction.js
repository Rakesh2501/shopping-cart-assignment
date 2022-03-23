import { LOGIN_ACTION, LOGOUT_ACTION } from '../constants/authConstants'

export function logIn(userName) {

    return {
        type: LOGIN_ACTION,
        payload: userName
    }
}

export function logOut() {
    return {
        type: LOGOUT_ACTION
    }
}