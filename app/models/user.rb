class User < ApplicationRecord
  has_many :addresses
  has_many :orders, -> { where(status: "finished") }, class_name: "Cart"
  has_one :cart, -> { where(status: "active") }

  has_secure_password
  has_secure_token :token

  validates :email, presence: true,
                    uniqueness: true,
                    format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :password, presence: true
end
