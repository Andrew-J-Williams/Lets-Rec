const initialState = {
    username: '',
    email: '',
    picture: '',
    many: [],
    teams: []
}

export default function userReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_USERS':
            return {
                username: action.payload[0].username,
                email: action.payload[0].email,
                many: action.payload
            }
        case 'FETCH_PROFILE':
            return {
                username: action.payload.username,
                email: action.payload.email,
                picture: action.payload.picture,
                teams: action.payload.teams
            }
        default:
            return state 
    }

}