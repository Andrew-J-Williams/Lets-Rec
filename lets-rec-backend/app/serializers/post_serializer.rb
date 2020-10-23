class PostSerializer < ActiveModel::Serializer
    attributes :id, :content, :user_id, :team_id
end