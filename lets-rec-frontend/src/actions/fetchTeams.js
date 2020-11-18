export function fetchTeams(){
    return (dispatch) => {
        dispatch({type: 'IS_LOADING'})

        fetch('http://localhost:3000/api/v1/teams/')
        .then(response => response.json())
        .then(data => 
            dispatch({
            type: 'FETCH_TEAMS',
            payload: data
        }))
    }
}