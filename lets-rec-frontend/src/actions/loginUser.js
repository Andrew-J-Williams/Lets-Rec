export const logUserIn = (info, history) => {

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
                history.push('/login')
            } else {
                console.log(user)
                localStorage.setItem("currentUser", user.id)
                localStorage.setItem("username", user.username)
                localStorage.setItem("pic", user.picture)

                const userId = localStorage.currentUser
                dispatch(getUser(user))
                history.push(`/users/${userId}`)
                window.location.reload()
            }
        })


    }
}

const getUser = cred => ({
    type: "LOGIN_USER",
    payload: cred
})