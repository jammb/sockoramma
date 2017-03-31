class UserExpandedSerializer < ActiveModel::Serializer
  attributes :name, :email, :token

  has_one :cart
  has_many :line_items
end
