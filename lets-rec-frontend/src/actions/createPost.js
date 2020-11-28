export function createPost(userContent){
    

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userContent)
        })
        .then(response => response.json())
        .then(post => {
            console.log(post)
            dispatch(makePost(post))
        })
    }
}

const makePost = input => ({
    type: 'CREATE_POST',
    payload: input
})