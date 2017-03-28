class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :picture, :price
  belongs_to :material
  belongs_to :color
  belongs_to :style
end