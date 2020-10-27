export const logUserIn = info => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({info})
        })
        .then(response => response.json())
        .then(user => {
            
        })


    }
}