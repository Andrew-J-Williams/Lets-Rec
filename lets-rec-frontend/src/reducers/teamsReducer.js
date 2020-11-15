const initialState = {
    team: {
        name: '',
        sport: '',
        location: '',
        venue: '',
        timeslot: '',
        status: '',
        members: 0,
    },
    manyTeams: []
}

export default function teamsReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_TEAMS':
            return {
                manyTeams: action.payload
            }
        default:
            return state 
    }

}