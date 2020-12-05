export const logUserOut = () => {
    
    return dispatch => {
        dispatch(removeUser())
        localStorage.clear()
        window.location.replace('http://localhost:3001/login')
    }
}

const removeUser = () => ({
    type: "LOGOUT_USER"
})