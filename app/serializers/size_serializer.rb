class SizeSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity
  has_many :quantities
  has_many :items, through: :quantities

  def quantity
    object.item.quantities.quantity
  end

end
