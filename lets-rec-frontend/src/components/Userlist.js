import React from 'react';



// Since this is a functional component, we have to pass in our props as an argument
const Userlist = (props) => {

    const myArray = props.users.many.map(x => x)
    myArray.forEach(element => console.log(element.username))

    return (
        <div>
            {props.users.username}
            {myArray.map(element => <h4 key={element.id}>{element.username}</h4>)}
        </div>
    )
}

export default Userlist