export function fetchUserPosts(){
    return (dispatch) => {
        const userId = parseInt(localStorage.currentUser, 10)

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

                const postArray = []
               
                posts.forEach(element =>{
                    if (element.user_id === userId){
                        postArray.push(element)
                    }
                })

                console.log(postArray)
                
               dispatch(getUserPosts(postArray))
            })
        }
    }
}

const getUserPosts = post => ({
    type: 'FETCH_USER_POSTS',
    payload: post
})