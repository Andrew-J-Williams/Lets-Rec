export function fetchTeam(teamId){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/teams/${teamId}`)
        .then(response => response.json())
        .then(data => 
            dispatch({
            type: 'FETCH_TEAM',
            payload: data
        }))
    }
}