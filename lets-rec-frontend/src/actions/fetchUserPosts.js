export function fetchUserPosts(){

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts/')
        .then(response => response.json())
        .then(data => 
            dispatch({
            type: 'FETCH_MEMBER_POSTS',
            payload: data
        })
        )
    }
}