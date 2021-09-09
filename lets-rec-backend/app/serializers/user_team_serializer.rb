class UserTeamSerializer < ActiveModel::Serializer
    belongs_to :user
    belongs_to :team
    attributes :id, :user_id, :team_id
end