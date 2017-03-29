class AddressSerializer < ActiveModel::Serializer
  attributes :street, :city, :state, :zip
  belongs_to :user
end
