class SizeSerializer < ActiveModel::Serializer
  attributes :id
  has_many :items, through: :quantities
end
