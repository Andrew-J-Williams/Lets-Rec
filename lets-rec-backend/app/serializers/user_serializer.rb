class UserSerializer < ActiveModel::Serializer
    has_many :teams

    attributes :id, :username, :email, :picture
end