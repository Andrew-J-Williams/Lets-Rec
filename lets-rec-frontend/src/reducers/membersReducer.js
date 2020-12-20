const initialState = {
    member: {
        id: '',
        username: '',
        email: '',
        picture: '',
        teams: [],
    },
    posts: []
}

export default function membersReducer (state=initialState, action) {

    switch(action.type){
        case 'LOAD_USER_PROFILE':
            return{
                member: action.payload
            }
        default:
            return state
    }
}