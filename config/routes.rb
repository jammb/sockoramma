Rails.application.routes.draw do

  resources :contents
  scope :api do
    resources :users
    resources :addresses
    resources :orders
    resources :items
    resources :sizes
    resources :colors
    resources :styles
    resources :materials
  end
  
  get "/:param1(/:param2)(/:param3)" => "application#static"
end
