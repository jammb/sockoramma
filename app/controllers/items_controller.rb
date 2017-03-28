class ItemsController < ApplicationController

  def index
    @items = Items.all
    render json: @items
  end
  
end
