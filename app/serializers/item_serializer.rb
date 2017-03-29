class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :picture, :price, :featured
  belongs_to :material
  belongs_to :color
  belongs_to :style
  has_many :quantities
  has_many :sizes, through: :quantities
end
