const initialState = {
    username: '',
    email: '',
    picture: '',
    many: []
}

export default function userReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_USERS':
            return {
                username: action.payload[0].username,
                email: action.payload[0].email,
                many: action.payload
            }
        default:
            return state 
    }

}