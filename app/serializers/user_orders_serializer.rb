class UserOrdersSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :orderings
  has_many :orders, through: :orderings
end
