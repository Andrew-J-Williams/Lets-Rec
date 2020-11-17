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
    }
}

export default function teamsReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_TEAMS':
            return {
                manyTeams: action.payload
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
                team: action.payload
            }
        default:
            return state 
    }

}