class GamesController < ApplicationController
  def index
    games = Game
      .left_joins(:reviews)
      .select(:id, :name, :image_url, :genre, "AVG(reviews.rating) AS rating")
      .group(:id)

    render json: games, status: :ok
  end 

  def create
    game = Game.create!(name: params[:title], image_url: params[:imageUrl], genre: params[:genres])
    render json: game, status: :created 
  end 


end
