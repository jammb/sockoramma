Rails.application.routes.draw do

  resources :sizes
  resources :colors
  resources :styles
  resources :materials
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
