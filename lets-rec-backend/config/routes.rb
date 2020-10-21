Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :posts
      resources :user_teams
      resources :teams
      resources :users
    end
  end


end

fetch(`http://localhost:3000`)