class Category < ApplicationRecord
    has_many :thoughts
    belongs_to :user
end
