class Item < ApplicationRecord
  belongs_to :material
  belongs_to :color
  belongs_to :style
  has_many :orders, through: :orderings
  has_many :sizes, through: :quantities
end
