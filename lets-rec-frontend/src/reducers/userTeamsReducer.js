const initialState = {
    userTeams: []
}

export default function userTeamsReducer (state=initialState, action) {

    switch(action.type){
        case 'FETCH_USER_TEAMS':
            return {
                userTeams: action.payload
            }
        case 'REMOVE_USER_TEAMS':
            const uT = state.userTeams.filter(team => team.id !== action.id)
            return {
                uT
            }
        default:
            return state
    }
}