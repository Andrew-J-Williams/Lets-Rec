export function createUserTeams(userId, teamId){

    const data = {
        user_id: userId,
        team_id: teamId
    }

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/user_teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(userteam => {
            console.log(userteam)
            dispatch(makeConnection(userteam))
        })
    }
}

const makeConnection = userteam => ({
    type: 'CREATE_USER_TEAMS',
    payload: userteam
})