class CartsController < ApplicationController

  def show
    render json: current_cart, meta: meta_dict
  end

  def update
    result = ChargeStripe.new(
                          current_cart,
                          params[:stripeToken],
                          current_cart.total_cost
                          ).charge_them
  end
end
