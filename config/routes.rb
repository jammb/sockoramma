Rails.application.routes.draw do

  resources :orders
  resources :items
  resources :sizes
  resources :colors
  resources :styles
  resources :materials

  

end
