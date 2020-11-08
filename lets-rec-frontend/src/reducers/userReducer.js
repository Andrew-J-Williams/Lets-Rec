const initialState = {
    user: {
        username: '',
        email: '',
        picture: '',
        teams: [],
        currentUser: ""
    }
}

export default function userReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_PROFILE':
            return {
                user: action.payload
            }
        case 'SET_CURRENT_USER':
            return {
                currentUser: action.payload
            }
        default:
            return state 
    }

}