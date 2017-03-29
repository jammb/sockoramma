class ColorsController < ApplicationController
  
  before_action :find_color, only: [:show, :destroy]
  # before_action :require_user, only: [:edit, :show, :update]
  # before_action :is_owner, only: [:destroy]

  def new
    @color = Color.new
  end

  def create
    @color = Color.find_or_create_by(params['id'])
  end

  def show
    # find_color
  end

  def index
    @colors = Color.all
    render json: @colors
  end

  def destroy
    # find_color
    @color.destroy
  end

  private

  def find_color
    @color = Color.find_by(params['id'])
  end

  def color_params
    params.require(:color).permit(:name)
  end

end
