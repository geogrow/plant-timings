Rails.application.routes.draw do
  resources :stands
  resources :plants
  root to: 'visitors#index'
  
  namespace :api do
    resources :plants
  end
end
