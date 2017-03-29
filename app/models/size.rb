class Size < ApplicationRecord
  has_many :quantities
  has_many :items, through: :quantities

  validates :name, presence: true
end
