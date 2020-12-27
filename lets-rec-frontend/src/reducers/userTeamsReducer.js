const initialState = {
    user_team: {
        user_id: 0,
        team_id: 0
    },
    userTeams: []
}

export default function userTeamsReducer (state=initialState, action) {

    switch(action.type){
        case 'FETCH_USER_TEAMS':
            return {
                userTeams: action.payload
            }
        case 'CREATE_USER_TEAMS':
            return {
                user_team: action.payload
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