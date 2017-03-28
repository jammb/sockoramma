class MaterialSerializer < ActiveModel::Serializer
  attributes :name
  belongs_to :item
end
