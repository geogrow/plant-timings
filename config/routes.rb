Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :stands
  resources :plants
  root to: 'visitors#index'
  
  namespace :api do
    resources :plants
  end
end
