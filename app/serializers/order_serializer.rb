class OrderSerializer < ActiveModel::Serializer
  attributes :id
  has_many :items, through: :orderings
  belongs_to :user
end
