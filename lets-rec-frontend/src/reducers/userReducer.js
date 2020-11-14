const initialState = {
    user: {
        username: '',
        email: '',
        picture: '',
        teams: [],
    },
    posts: []
}

export default function userReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_PROFILE':
            return {
                user: action.payload
            }
        case 'FETCH_USER_POSTS':
            return {
                posts: action.payload
            }
        case 'FETCH_POSTS':
            return {
                posts: action.payload
            }
        default:
            return state 
    }

}