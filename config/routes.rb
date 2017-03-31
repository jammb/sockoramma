Rails.application.routes.draw do
  root 'application#static'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  scope :api do
    resources :users
    resources :contents
    resources :addresses
    resources :orders
    resources :items
    resources :sizes
    resources :colors
    resources :styles
    resources :materials
    resources :carts do
      resources :line_items
    end
  end

  get "/api/login" => 'sessions#new', as: :login_path
  post "/api/login" => 'sessions#create'

  # fallback route
  get "/:param1(/:param2)(/:param3)" => "application#static"
end
