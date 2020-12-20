export function fetchUser(userId){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(getUser(data))
            console.log(data)
        })
    }
}

const getUser = info => ({
    type: "FETCH_USER",
    payload: info
})