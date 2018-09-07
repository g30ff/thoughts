Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# resources :users :categories :thoughts

resources :categories do
  resources :thoughts, only: [:index, :show, :create]
end
resources :users, :thoughts
end
