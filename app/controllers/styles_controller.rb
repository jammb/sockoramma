class StylesController < ApplicationController

  before_action :find_style, only: [:show, :destroy]
  # before_action :require_user, only: [:edit, :show, :update]
  before_action :is_owner, only: [:destroy]

  def new
    @style = Style.new
  end

  def create
    @style = Style.find_or_create_by(params['id'])
  end

  def show
    # find_style
  end

  def index
    @styles = Style.all
    render json: @styles
  end

  def destroy
    # find_style
    @style.destroy
  end


  private

  def find_style
    @style = Style.find_by(params['id'])
  end

  def style_params
    params.require(:style).permit(:name)
  end

end
