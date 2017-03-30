class QuantitySerializer < ActiveModel::Serializer
  attributes :quantity, :name
  belongs_to :size
  belongs_to :item

  def name
    object.size.name
  end
end
