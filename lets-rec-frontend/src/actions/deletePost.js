export function deletePost(post_id){

    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/posts/${post_id}`, {
            method: "DELETE",
        })
        .then(data => {
            dispatch(removePost(data))
            window.location.reload()
        })
    }
}  

const removePost = input => ({
    type: 'REMOVE_POST',
    payload: input
})