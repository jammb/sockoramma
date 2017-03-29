class QuantitySerializer < ActiveModel::Serializer
  attributes :quantity
  belongs_to :size
  belongs_to :item
end
