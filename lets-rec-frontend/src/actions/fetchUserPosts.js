export function fetchUserPosts(){
    return (dispatch) => {
        const userId = localStorage.currentUser

        if (userId) {
            fetch(`http://localhost:3000/api/v1/posts/`, {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                }
            })
            .then(response => response.json())
            .then(posts => {
               console.log(posts)
               dispatch(getUserPosts(posts))
            })
        }
    }
}

const getUserPosts = post => ({
    type: 'FETCH_USER_POSTS',
    payload: post
})