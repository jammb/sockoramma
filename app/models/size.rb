class Size < ApplicationRecord
  has_many :itms, through: :quantities

  validates :name, presence: true
end
