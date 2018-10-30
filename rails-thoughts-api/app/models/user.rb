class User < ApplicationRecord
    has_many :categories
    has_many :thoughts
    has_secure_password
end
