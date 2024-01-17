class GamesController < ApplicationController
  # def index
  #   games = Game
  #     .left_joins(:reviews)
  #     .select(:id, :name, :image_url, :genre, "AVG(reviews.rating) AS rating")
  #     .group(:id)

  #   render json: games, status: :ok
  # end 

  def index
    games = Game.all
    render json: games, status: :ok
  end


  def create
    game = Game.create!(game_params)
    render json: game, status: :created 
  end 

  private

  def  game_params
      params.permit(:name, :image_url, :genre)
  end


end
