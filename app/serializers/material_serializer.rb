class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :item
end
