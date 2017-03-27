Rails.application.routes.draw do
  resources :users
  resources :addresses
  resources :orders
  resources :items
  resources :sizes
  resources :colors
  resources :styles
  resources :materials

  

end
