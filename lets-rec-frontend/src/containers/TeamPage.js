import React from 'react';
import { connect } from 'react-redux';

import TeamInfo from '../components/TeamInfo'
import TeamPosts from '../components/TeamPosts'

import { fetchTeam } from '../actions/fetchTeam'

import '../TeamPage.css'

class TeamPage extends React.Component {
    

    componentDidMount(){
        const teamId = this.props.match.params.id
        this.props.fetchTeam(teamId)
    }

    onLoad(){
        let myValue = false

        if (! localStorage.pageVisit){
            localStorage.setItem("pageVisit", myValue);
            window.location.reload();
        } else if (localStorage.pageVisit === "false"){
            console.log("You've been on the Team's Page before!")
            window.location.reload();
            localStorage.pageVisit = true
        } 
    }

    render(){
        this.onLoad()
        console.log(this.props.posts)

            return(
            <div>
                <TeamInfo team={this.props.team}/>
                <TeamPosts team={this.props.team} teamPosts={this.props.posts}/>
            </div>
            )
    }

}

const mapStateToProps = (state) => {
    return {
        team: state.teamsReducer.team,
        posts: state.userReducer.posts
    }
}

export default connect(mapStateToProps, {fetchTeam})(TeamPage)
