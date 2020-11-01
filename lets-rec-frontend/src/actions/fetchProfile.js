export function fetchProfile(){
    return (dispatch) => {
        const userId = localStorage.currentUser

        if (userId) {
            fetch(`http://localhost:3000/api/v1/users/${userId}`, {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'Authorization': `Bearer ${userId}`
                }
            })
            .then(response => response.json())
            .then(user => {
                if (user.error){
                    alert(user.error)
                } else {
                    console.log(user)
                    dispatch(getUser(user))
                }
            })
        }
    }
}

const getUser = cred => ({
    type: 'FETCH_PROFILE',
    payload: cred
})
