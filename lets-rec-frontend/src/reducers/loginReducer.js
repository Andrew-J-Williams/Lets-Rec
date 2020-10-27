const initialState = {
    username: '',
    password: ''
}

export default function loginReducer (state=initialState, action){
    switch(action.type){
        case "LOGIN_USER":
            return action.payload
        default:
            return state
    }
}

