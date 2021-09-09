export function fetchUserProfile(userId){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(getMember(data))
            console.log(data)
        })
    }
}

const getMember = info => ({
    type: 'LOAD_USER_PROFILE',
    payload: info
})