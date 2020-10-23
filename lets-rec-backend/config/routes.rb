Rails.application.routes.draw do

  post "api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  get "api/v1/find_current_user", to: "api/v1/sessions#find_current_user"
  delete "api/v1/logout", to: "api/v1/sessions#destroy"

  namespace :api do
    namespace :v1 do
      
      resources :user_teams

      resources :teams do
        resources :users
        resources :posts
      end

      resources :users do 
        resources :teams
        resources :posts
      end

    end
  end


end