User.where(username: "Andy").first_or_create(username: "Andy", email:"andy@test.com", password:"password", picture: "testing")
User.where(username: "Bailee").first_or_create(username: "Bailee", email:"bailee@test.com", password:"password", picture: "testing")
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
