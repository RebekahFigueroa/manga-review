class StatsController < ApplicationController
  def stats 
    user = User.find(params[:user_id])
    numReviewed = user.reviews.count
    averageRating = user.reviews.average(:rating).to_f.round
    totalLength = user.reviews.sum { |review| review.review_text.length }
    averageLength = (totalLength / user.reviews.count).to_f
    multiplayerCount = user.reviews.map { |review| review.game.genre.include?("Multiplayer") ? 1 : 0 }.sum
    singlePlayerCount = user.reviews.map { |review| review.game.genre.include?("Singleplayer") ? 1 : 0 }.sum


    render json: {
      numReviewed: numReviewed, 
      averageRating: averageRating,
      averageLength: averageLength, 
      playerCountPreference: multiplayerCount > singlePlayerCount ? "Multiplayer" : singlePlayerCount > multiplayerCount ? "Singleplayer" : "Both"
    }, status: :ok
  end 
end
