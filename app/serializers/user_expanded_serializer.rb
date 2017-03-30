class UserExpandedSerializer < ActiveModel::Serializer
  attributes :name, :email, :token, :id

  has_one :cart
  has_many :orders
end
