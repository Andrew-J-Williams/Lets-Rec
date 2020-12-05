const initialState = {
    post: {
        content:'',
        user_id: 0,
        team_id: 0
    }
}

export default function postReducer (state=initialState, action) {

    switch(action.type){
        case 'CREATE_POST':
        return {
            post: action.payload
        }
        case 'DELETE_POST':
            return initialState
        default:
            return state
    }

}