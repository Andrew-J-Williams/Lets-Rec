class Post < ApplicationRecord
    belongs_to :user
    belongs_to :team

    validates :post, presence: true
end
