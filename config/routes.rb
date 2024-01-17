Rails.application.routes.draw do

  resources :users, only: [:index, :show, :create]
  resources :games, only: [:index, :create] 
  resources :reviews, only: [:index, :create, :update, :destroy]

  get "/auth", to: "auth#auth"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy" 

  get "/reviews/:game_id", to: "reviews#byGame"

  get "/stats", to: "stats#stats"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
