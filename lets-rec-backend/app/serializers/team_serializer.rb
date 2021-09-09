class TeamSerializer < ActiveModel::Serializer
    has_many :users
    attributes :id, :name, :sport, :location, :venue, :timeslot, :status, :members
end