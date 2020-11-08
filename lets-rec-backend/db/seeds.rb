User.where(username: "_captainjilliams_").first_or_create(username: "_captainjilliams_", email:"andy@test.com", password:"password", picture: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/10410409_10204352228911614_7347145493962414363_n.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_ohc=jA-U7jYL6UIAX9qbu5b&_nc_ht=scontent.fhou1-2.fna&oh=a759b13409d783b575a71eed000f2a97&oe=5FC6BBF0")
User.where(username: "Bailee").first_or_create(username: "Bailee", email:"bailee@test.com", password:"password", picture: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/100820996_10217499915909005_4436576031356223488_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=OkLZrgHo0f8AX8GMU7l&_nc_ht=scontent.fhou1-2.fna&oh=79e2ebec8dfb55d68a114fa173147a85&oe=5FC3853F")
User.where(username: "Ira").first_or_create(username: "Ira", email:"ira@test.com", password:"password", picture: "testing")

Team.where(name: "SouthSide Bears").first_or_create(
    name: "SouthSide Bears",
    sport: "Football",
    location: "Chicago",
    venue: "Lakeview Fields",
    timeslot: "6:00PM - 8:00PM",
    status: "closed",
    members: 12
)

Team.where(name: "Wilson Warriors").first_or_create(
    name: "Wilson Warriors",
    sport: "Volleyball",
    location: "Los Angeles",
    venue: "Seaside Rec Center",
    timeslot: "7:00PM - 9:00PM",
    status: "open",
    members: 7
)

Team.where(name: "Boom Baby Daggers").first_or_create(
    name: "Boom Baby Daggers",
    sport: "Basketball",
    location: "Houston",
    venue: "Midtown YMCA",
    timeslot: "8:00PM - 10:00PM",
    status: "open",
    members: 8
)

UserTeam.where(user_id: 1, team_id: 1).first_or_create(user_id: 1, team_id: 1)
UserTeam.where(user_id: 1, team_id: 3).first_or_create(user_id: 1, team_id: 3)
UserTeam.where(user_id: 2, team_id: 1).first_or_create(user_id: 2, team_id: 1)
UserTeam.where(user_id: 2, team_id: 2).first_or_create(user_id: 2, team_id: 2)
UserTeam.where(user_id: 3, team_id: 1).first_or_create(user_id: 3, team_id: 1)


Post.find_or_create_by(content: "Hey guys! Just wanting to know when we plan on practicing this coming week.", user_id: 1, team_id: 1)
Post.find_or_create_by(content: "I'll be bringing my own football on Thursday for the meetup.", user_id: 1, team_id: 1)
Post.find_or_create_by(content: "Looks like it will be raining Friday night. Let's cancel the game.", user_id: 1, team_id: 1)
Post.find_or_create_by(content: "I'll be bringing a friend to act as a sub for Monday night.", user_id: 1, team_id: 3)