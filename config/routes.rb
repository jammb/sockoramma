Rails.application.routes.draw do
  resources :users
  resources :addresses
  resources :sizes
  resources :colors
  resources :styles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
