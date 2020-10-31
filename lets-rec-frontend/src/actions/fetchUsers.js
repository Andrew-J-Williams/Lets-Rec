export function fetchUsers(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/')
        .then(response => response.json())
        .then(data => 
            dispatch({
            type: 'FETCH_USERS',
            payload: data
        }))
    }
}

// We dispatch an action object to our reducer that will return a new version of our state.