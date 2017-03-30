class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :name
  has_one :cart
  has_one :item
  has_one :quantity, through: :item

  def name
    object.item.name
  end

end
