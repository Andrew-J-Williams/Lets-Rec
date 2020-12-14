export function fetchTeam(teamId){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/teams/${teamId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(getTeam(data))
            console.log(data)
        })
    }
}

export function addTeamtoUser(teamId){
    return () => {
        fetch(`http://localhost:3000/api/v1/teams/${teamId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const userTeamsArray = JSON.parse(localStorage.getItem('teams'))
            console.log(userTeamsArray)
            userTeamsArray.push(data)
            console.log(userTeamsArray)
            localStorage.setItem("teams", JSON.stringify(userTeamsArray))

            window.location.reload()
        })
    }
}

const getTeam = info => ({
    type: "FETCH_TEAM",
    payload: info
})