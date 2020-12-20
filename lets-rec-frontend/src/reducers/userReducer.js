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
        case 'FETCH_USER':
            return {
                user: action.payload
            }
        case 'FETCH_POSTS':
            return {
                posts: action.payload
            }
        case 'REMOVE_POST':
            const posts = state.posts.filter(status => status.id !== action.id)
            return {
                posts
            }
        default:
            return state 
    }

}