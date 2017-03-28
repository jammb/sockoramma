class Quantity < ApplicationRecord
  belongs_to :item
  belongs_to :size

  validates :quantity, presence: true
end
