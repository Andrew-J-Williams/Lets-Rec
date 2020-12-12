User.where(username: "_captainjilliams_").first_or_create(username: "_captainjilliams_", email:"andy@test.com", password:"password", picture: "https://media-exp1.licdn.com/dms/image/C4E03AQFiy3mXVKA0SQ/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=djH_Y7cwdAfk7tQhlPu_bnJEnq4_RiWG9MmNxy82SxI")
User.where(username: "Bailee").first_or_create(username: "Bailee", email:"bailee@test.com", password:"password", picture: "https://media-exp1.licdn.com/dms/image/C4E03AQHRQ_nYYNxGvw/profile-displayphoto-shrink_400_400/0/1599794681270?e=1612396800&v=beta&t=ylQCDdnK9NvmO9wk-ayTJFEIO70CazRV3qspi1xPkAE")
User.where(username: "Ira").first_or_create(username: "Ira", email:"ira@test.com", password:"password", picture: "https://64.media.tumblr.com/3c948972b7be8a79f1436393a3a26281/tumblr_ogw26dCy7A1smd799o1_1280.jpg")

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
Post.find_or_create_by(content: "New to this whole thing. How is everyone?", user_id: 2, team_id: 1)
Post.find_or_create_by(content: "I can't make it to practice this Thursday since I will be out of town. Sorry!", user_id: 2, team_id: 1)
Post.find_or_create_by(content: "I'm literally a baby. Not sure why I am even here.", user_id: 3, team_id: 1)
Post.find_or_create_by(content: "I guess I will be moral support for now", user_id: 3, team_id: 1)
Post.find_or_create_by(content: "I just love volleyball so much!", user_id: 2, team_id: 2)
Post.find_or_create_by(content: "Great game last night guys!", user_id: 2, team_id: 2)
Post.find_or_create_by(content: "I'm here for emotional support, just so you know!", user_id: 2, team_id: 2)