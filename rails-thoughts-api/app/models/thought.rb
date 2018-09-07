class Thought < ApplicationRecord
    belongs_to :category
    belongs_to :user
end
