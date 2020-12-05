export function deletePost(post_id){

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/posts/${post_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(removePost())

            console.log("delete")
        })
    }
}  

const removePost = input => ({
    type: 'DELETE_POST'
})