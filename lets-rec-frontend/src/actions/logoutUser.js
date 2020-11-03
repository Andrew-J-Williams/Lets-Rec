export const logUserOut = () => {
    
    return (dispatch) => {
        return fetch("http://localhost:3000/api/v1/logout", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "DELETE"
        })
        .then(response => response.json())
        .then( data => {
            console.log(data)
            dispatch(removeUser())
            localStorage.clear()
            window.location.reload()
        })
    }
}

const removeUser = () => ({
    type: "LOGOUT_USER"
})