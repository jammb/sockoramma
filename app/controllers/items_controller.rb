class ItemsController < ApplicationController
  before_action :find_style, only: [:show, :destroy]

  def index
    @items = Item.all
    render json: @items
  end

  def create

  end

  private

  def find_item
    @item = Item.find(params[:id])
  end


end
