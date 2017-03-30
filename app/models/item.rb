class Item < ApplicationRecord
  belongs_to :material
  belongs_to :color
  belongs_to :style
  has_many :quantities
  has_many :orders, through: :orderings
  has_many :sizes, through: :quantities

  validates :title, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :material_id, presence: true
  validates :color_id, presence: true
  validates :style_id, presence: true

  mount_uploader :picture, ItemPictureUploader


end
