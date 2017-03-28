class Style < ApplicationRecord
  has_many :items
  
  validates :cut, presence: true
end
