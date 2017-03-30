class SizeSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :quantities
  has_many :items, through: :quantities
end
