Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
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
  

end
