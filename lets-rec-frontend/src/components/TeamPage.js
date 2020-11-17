import React from 'react';

class TeamPage extends React.Component {


    render(){

        const id = this.props.match.params.id
        console.log(id)

        return(
            <div>
                <h1>Team Page</h1>
            </div>
        )
    }

}

export default TeamPage