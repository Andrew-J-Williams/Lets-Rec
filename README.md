# Let's Rec!
Let's Rec is a social network made for those who love sports. It is a web-based application created with Rails, React, and Redux. A user can create an account or sign into an existing account and discover what teams are located near them. Users can create teams, join existing teams, or leave teams they no longer can play with. Users can interact through creating posts on their specific team pages, allowing teammates to stay in contact and up to date. The idea behind Let's Rec is to connect like-minded individuals who want to stay in shape and socialize in their own cities. Our #1 goal in developing this application is having fun, so get out there and rec!

# Installation Instructions

## Backend

Fork and clone this repository to your local machine.

Change the directory to 'Lets-Rec' and run the following:

  • cd lets-rec-backend
  • bundle install
  
You will then want to setup the database by running the following:

  • rake db:create
  • rake db:migrate
  • rake db:seed
  
To run the Rails server from localhost:3000, run:

  • rails s
  
If everything is working, if you navigate to `localhost:3000/api/v1/teams` you should see a list of different teams. 

## Frontend

Navigate back to the 'Lets-Rec' directory and then run the following:

  • cd lets-rec-frontend
  • npm start
  
If everything is working, you should see the application display at `localhost:3001/home`.

# Usage

  • Click on 'Create Account' to register as a new user.
  • Click on 'Log In' to sign in as an existing user.
  • Click on the Home icon to view an Activity Feed of all posts from teams you are a member of.
  • Click on the Profile icon to view posts you've created as well as your user information. Click on 'Log Out' to sign out of your account.
  • Click on the Jersey icon to view your teams page, here you can:
    • View all the teams you are currently a member of.
    • Click on a teammate's profile picture to view their profile.
    • Click on the team's name to view the team's page.
    • Search for open teams by filtering by location, sport, or both.
    • Click the 'Join Team' button on any open team to become a member and add the team to your team list.
    • Click the 'Create Team' button to fill out a form to make a new team that will automatically add you.
  • Visit the team page for a team you are a member of. 
  • Create or delete a post under on one of your team's activity feeds.
  
# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Andrew-J-Williams/Lets-Rec. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.
