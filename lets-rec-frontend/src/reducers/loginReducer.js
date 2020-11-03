const initialState = {
    username: '',
    password: ''
}

export default function loginReducer (state=initialState, action){
    switch(action.type){
        case "LOGIN_USER":
            return action.payload
        case "LOGOUT_USER":
            return initialState
        default:
            return state
    }
}

