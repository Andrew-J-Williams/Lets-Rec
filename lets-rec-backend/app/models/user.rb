class User < ApplicationRecord
    has_many :posts
    has_many :user_teams
    has_many :teams, through: :user_teams

    validates :username, :email presence: true
    has_secure_password
end
