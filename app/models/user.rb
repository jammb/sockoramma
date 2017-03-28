class User < ApplicationRecord
  has_many :orders
  has_many :addresses
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end
