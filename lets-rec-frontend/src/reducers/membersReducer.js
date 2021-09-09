const initialState = {
    member: {
        id: '',
        username: '',
        email: '',
        picture: '',
        teams: [],
    },
    updates: []
}

export default function membersReducer (state=initialState, action) {

    switch(action.type){
        case 'LOAD_USER_PROFILE':
            return{
                member: action.payload
            }
        case 'FETCH_MEMBER_POSTS':
            return{
                updates: action.payload
            }
        default:
            return state
    }
}