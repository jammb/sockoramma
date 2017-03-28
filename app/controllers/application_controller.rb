class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  def static
    render file: "public/index.html"
  end
end
