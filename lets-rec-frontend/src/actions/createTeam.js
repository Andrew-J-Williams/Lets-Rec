export function createTeam(info, userId){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(response => response.json())
        .then(team => {
            console.log(team)

            dispatch(makeTeam(team))
            window.location.reload()
        })
    }
}

export function createUserTeams(userId, teamId){



    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/user_teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(response => response.json())
        .then(userteam => {
            
        })
    }
}

const makeTeam = input => ({
    type: 'CREATE_TEAM',
    payload: input
})

const makeConnection = (user, team) => ({
    type: 'CREATE_USER_TEAMS',
    user_id: user,
    team_id: team
})