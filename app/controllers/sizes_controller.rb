class SizesController < ApplicationController

  before_action :find_size, only: [:show, :destroy]
  # before_action :require_user, only: [:edit, :show, :update]
  # before_action :is_owner, only: [:destroy]

  def new
    @size = Size.new
  end

  def create
    @size = Size.find_or_create_by(params['id'])
  end

  def show
    # find_size
  end

  def index
    @sizes = Size.all
    render json: @sizes
  end

  def destroy
    # find_size
    @size.destroy
  end


  private

  def find_size
    @size = Size.find_by(params['id'])
  end

  def size_params
    params.require(:size).permit(:name)
  end

end
