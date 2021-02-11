import { USER_LOGIN_SUCCESS } from "../constants/userConstants"

export const login =( email) => async(dispatch) => {
    try {
        dispatch({
        type: USER_LOGIN_SUCCESS,
        payload:userPayload.identifier
          
        })
        localStorage.setItem('userInfo')
    } catch (error) {
        
    }
}