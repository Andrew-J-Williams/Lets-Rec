Rails.application.routes.draw do

  #post "api/v1/login", to: "api/v1/sessions#create"
  #post "/api/v1/signup", to: "api/v1/users#create"
  #get "api/v1/find_current_user", to: "api/v1/sessions#find_current_user"
  #delete "api/v1/logout", to: "api/v1/sessions#destroy"

  namespace :api do
    namespace :v1 do
      
      resources :teams do
        resources :users
      end

      resources :users do 
        resources :teams
      end

      resources :user_teams
      resources :posts
      resources :sessions

    end
  end


end