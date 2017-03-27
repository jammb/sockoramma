Rails.application.routes.draw do
  resources :materials
  get 'materials/index'

  get 'materials/create'

  get 'materials/new'

  get 'materials/show'

  get 'materials/destroy'

  get 'materials/update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
