export const logUserIn = (info) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(response => response.json())
        .then(user => {
            if (user.error){
                alert(user.error)
                window.location.replace('http://localhost:3001/login')
            } else {
                console.log(user)
                
                localStorage.setItem("currentUser", user.id)
                localStorage.setItem("username", user.username)
                localStorage.setItem("email", user.email)
                localStorage.setItem("teams", JSON.stringify(user.teams))
                localStorage.setItem("pic", user.picture)

                dispatch(getUser(user))
                window.location.replace('http://localhost:3001/profile')
            }
        })


    }
}

const getUser = cred => ({
    type: "LOGIN_USER",
    payload: cred
})