class PostSerializer < ActiveModel::Serializer
    belongs_to :user
    belongs_to :team

    attributes :id, :content, :user_id, :team_id
end