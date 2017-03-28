class Item < ApplicationRecord
  belongs_to :material
  belongs_to :color
  belongs_to :style
  has_many :orders, through: :orderings
  has_many :sizes, through: :quantities

  validates :name, presence: true
  validates :description, presence: true
  validates :street, presence: true

end
