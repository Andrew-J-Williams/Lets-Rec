class Team < ApplicationRecord
    has_many :posts
    has_many :user_teams
    has_many :users, through: :user_teams

    validates :name, :sport, :location, :venue, :timeslot, :status, presence: true
    #validates_inclusion_of :status, :in => ['open', 'closed', 'Open', 'Closed'] 
end
