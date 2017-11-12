Rails.application.routes.draw do
  resources :tests
  get 'hello_world', to: 'hello_world#index'
  root to: "root#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
