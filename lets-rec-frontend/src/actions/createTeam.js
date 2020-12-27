export function createTeam(info){

    const newTeam = {
        name: info.name,
        sport: info.sport,
        location: info.location,
        venue: info.venue,
        timeslot: info.timeslot,
        status: info.status,
        members: info.members,
    }



    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/teams`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newTeam)
        })
        .then(response => response.json())
        .then(team => {
            console.log(team)

            const userTeamsArray = JSON.parse(localStorage.getItem('teams'))
            userTeamsArray.push(team)
            console.log(userTeamsArray)
            localStorage.setItem("teams", JSON.stringify(userTeamsArray))

            dispatch(makeTeam(team))
        })
    }
}

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

const makeTeam = input => ({
    type: 'CREATE_TEAM',
    payload: input
})

const makeConnection = userteam => ({
    type: 'CREATE_USER_TEAMS',
    payload: userteam
})