Rails.application.routes.draw do

  resources :users, only: [:index, :show, :create]
  resources :games, only: [:index, :show, :create] 
  resources :reviews, only: [:index, :create]

  get "/auth", to: "auth#auth"


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 

  get "/reviews/:game_id", to: "reviews#byGame"
  patch "/reviews/:id", to: "reviews#editReview"
  delete "/reviews/:id", to: "reviews#deleteReview"

  get "/stats", to: "stats#stats"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
