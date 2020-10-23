andy = User.create(username: 'andyman', email: 'iamtheandyman94', password_digest: 'trymedude')


andy.teams.create({name: 'BossNation', sport: 'Basketball', location: 'Houston', venue: 'Downtown YMCA', timeslot: '5:00PM - 8:00PM', status: 'open', members: 7})
