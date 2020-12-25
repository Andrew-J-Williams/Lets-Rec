const initialState = {
    team: {
        name: '',
        sport: '',
        location: '',
        venue: '',
        timeslot: '',
        status: '',
        members: 0,
        users: []
    },
    manyTeams: [],
    user_team: {
        user_id: 0,
        team_id: 0
    },
    userTeams: [],
    isLoading: false
}

export default function teamsReducer (state=initialState, action) {
 
    switch(action.type){
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_TEAMS':
            return {
                manyTeams: action.payload,
                isLoading: false
            }
        case 'CREATE_TEAM':
            return {
                team: action.payload
            }
        case 'CREATE_USER_TEAMS':
            return {
                user_team: action.payload
            }
        case 'FETCH_TEAM':
            return {
                team: action.payload,
                isLoading: false
            }
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