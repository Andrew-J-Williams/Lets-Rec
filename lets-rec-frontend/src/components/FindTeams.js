import React from 'react';

import '../FindTeams.css'

class FindTeams extends React.Component {

    render(){
        const myArray = this.props.teams
        console.log(...myArray)

        return(
            <div className="find-teams-container">
                {myArray.map(element => 
                    <div key={element.id}>
                        <h3>{element.name}</h3>
                        <h4>{element.location}</h4>
                    </div>    
                )}
            </div>
        )
    }
}

export default FindTeams

