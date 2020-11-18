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
        default:
            return state 
    }

}