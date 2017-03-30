class AddressesController < ApplicationController

  def create
    @address = Address.new(address_params)
  end


  private

  def address_params
    params.permit(:street, :city, :state, :zip)
  end
end
