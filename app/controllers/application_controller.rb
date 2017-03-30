class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  helper_method :current_user

  def static
    render html: File.open("#{Rails.root}/public/index.html").read.html_safe, status: 200
  end

  def meta_dict(collection=nil)
    if collection
      pagination = {
        pagination: {
          current_page: collection.current_page,
          next_page: collection.next_page,
          prev_page: collection.prev_page, # use collection.previous_page when using will_paginate
          total_pages: collection.total_pages,
          total_count: collection.total_count
        }
      }
    else
      pagination = {}
    end

    starter = ActiveModelSerializers::SerializableResource.new(current_cart).as_json
    starter.merge(pagination)

    def current_cart
      return @cart if @cart
      if params[:cart_token]
        @cart = Cart.find_by(token: params[:cart_token])
      elsif current_user && current_user.cart
        @cart = current_user.cart
      elsif current_user
        @cart = current_user.cart.create
      else
        @cart = Cart.create!(status: "active")
      end
    end
  end

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
