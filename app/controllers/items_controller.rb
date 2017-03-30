class ItemsController < ApplicationController
  before_action :find_style, only: [:show, :destroy]

  def index
    @items = Item.all
    render json: @items, meta: meta_dict(@items)
  end


  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item, meta: meta_dict
    else
      render json: {errors: @item.errors.full_messages.map{|e| {error: e}}}, status: 400
    end
  end

  def show

  end

  private

  def find_item
    @item = Item.find(params[:id])
    render json: @item
  end

  def item_params
    params.permit(:title, :description, :picture, :price, :material, :color, :style, :featured)
  end

  def item_params
    params.permit(:title, :description, :price, :material_id, :color_id, :style_id)
  end
end
