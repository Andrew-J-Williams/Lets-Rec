const initialState = {
    username: '',
    email: '',
    password: '',
    picture: ''
}

export default function signupReducer (state=initialState, action) {
    
    switch(action.type){
        case "CREATE_USER":
            return action.payload 
    }
}