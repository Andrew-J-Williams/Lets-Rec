export const signUserUp = (info, history) => {

    const newUser = {
        username: info.username,
        email: info.email,
        password: info.password,
        picture: info.picture
    }

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(user => {
            console.log(newUser)

            if (user.error){
                console.log(user)
                alert(user.error)
                history.push('/signup')
            } else {
                console.log(user)
                
                localStorage.setItem("currentUser", user.id)
                localStorage.setItem("username", user.username)
                localStorage.setItem("email", user.email)
                localStorage.setItem("teams", "[]")
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