import React from 'react';

const Teamslist = (props) => {

    const myArray = props.teams.manyTeams
    console.log(...myArray)

    return(
        <div>
            {myArray.map(element => 
                <div key={element.id}>
                    <h3>{element.name}</h3>
                    <h4>{element.location}</h4>
                </div>    
            )}
        </div>
    )
}

export default Teamslist

/*
    <ul>
        {element.users.map(user =>
            <li key={user.id}>{user.username}</li>
        )}
    </ul>
*/