class ItemsController < ApplicationController
  before_action :find_style, only: [:show, :destroy]

  def index
    # binding.pry
    @items = Item.all
    render json: @items
  end

  def create

  end

  def show

  end

  private

  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.permit(:title, :description, :picture, :price, :material, :color, :style, :featured)
  end


end
