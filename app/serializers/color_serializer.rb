class ColorSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :item
end
