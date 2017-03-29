class MaterialsController < ApplicationController
  
  before_action :find_material, only: [:show, :destroy]
  # before_action :require_user, only: [:edit, :show, :update]
  # before_action :is_owner, only: [:destroy]

  def new
    @material = Material.new
  end

  def create
    @material = Material.find_or_create_by(params['id'])
  end

  def show
    # find_material
  end

  def index
    @materials = Material.all
    render json: @materials
  end

  def destroy
    # find_material
    @material.destroy
  end

  private

  def find_material
    @material = Material.find_by(params['id'])
  end

  def material_params
    params.require(:material).permit(:name)
  end

end
