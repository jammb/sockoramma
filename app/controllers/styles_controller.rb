class StylesController < ApplicationController

  def new

  end

  def create

  end

  def show
  end

  def index
    @styles = Style.all
    render json: @styles
  end

  def destroy

  end


  private

  def find_by_id
    @style = Style.find_by(params['id'])
  end

  
end
