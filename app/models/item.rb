class Item < ApplicationRecord
  belongs_to :material
  belongs_to :color
  belongs_to :style
end
