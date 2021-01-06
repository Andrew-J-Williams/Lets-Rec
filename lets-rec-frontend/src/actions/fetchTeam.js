export function fetchTeam(teamId){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/teams/${teamId}`)
        .then(response => response.json())
        .then(data => {
            let userId = []
            data.users.forEach(user => {
                if(user.id === parseInt(localStorage.currentUser, 10)){
                    console.log("My Team!")
                    userId.push(user.id)
                }
            })
            if(userId.includes(parseInt(localStorage.currentUser, 10))){
                dispatch(getTeam(data))
            } else {
                window.location.replace('http://localhost:3001/teams')
            }
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