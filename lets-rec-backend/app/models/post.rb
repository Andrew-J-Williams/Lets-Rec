class Post < ApplicationRecord
    belongs_to :user
    belongs_to :team

    scope :sort_posts, -> {order(id: :desc)}
end
