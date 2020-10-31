const initialState = {
    manyTeams: []
}

export default function teamsReducer (state=initialState, action) {
 
    switch(action.type){
        case 'FETCH_TEAMS':
            return {
                manyTeams: action
            }
        default:
            return state 
    }

}