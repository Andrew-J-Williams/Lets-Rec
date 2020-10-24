export function fetchUsers(){
    
    fetch('http://localhost:3000/api/v1/users/')
    .then(response => response.json())
    .then(data => console.log(data))
    
}

// We dispatch an action object to our reducer that will return a new version of our state.