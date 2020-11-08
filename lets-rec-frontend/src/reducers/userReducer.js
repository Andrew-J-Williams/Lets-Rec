const initialState = {
    user: {
        username: '',
        email: '',
        picture: '',
        teams: []
    }
}

export default function userReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_PROFILE':
            return {
                user: action.payload
            }
        default:
            return state 
    }

}