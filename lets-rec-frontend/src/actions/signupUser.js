export const signUserUp = (info, history) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/signup', {
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
                history.push('/login')
            } else {
                console.log(user)
                
                localStorage.setItem("currentUser", user.id)
                localStorage.setItem("username", user.username)
                localStorage.setItem("email", user.email)
                localStorage.setItem("teams", JSON.stringify(user.teams))
                localStorage.setItem("pic", user.picture)

                dispatch(createUser(user))
                history.push(`/profile`)
                window.location.reload()
            }
        })


    }
}

const createUser = cred => ({
    type: "CREATE_USER",
    payload: cred
})