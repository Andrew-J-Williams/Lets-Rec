export function getUserTeams(){

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/user_teams/')
        .then(response => response.json())
        .then(data => 
            dispatch({
            type: 'FETCH_USER_TEAMS',
            payload: data
        })
        )
    }

}

export function deleteUserTeams(userTeamObj){

    console.log(userTeamObj.id)
    
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/user_teams/${userTeamObj.id}`, {
             method: "DELETE",
         })
         .then(data => {

            let userTeamsArray = JSON.parse(localStorage.getItem('teams'))
            
             dispatch(leaveTeam(data))
             window.location.replace('http://localhost:3001/teams')
         })
     }
}

const leaveTeam = userTeamInfo => ({
    type: 'REMOVE_USER_TEAMS',
    payload: userTeamInfo
})