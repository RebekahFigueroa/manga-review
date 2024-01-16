class ReviewsController < ApplicationController
  def index
    reviews = Review
      .joins(:game)
      .select(:id, :review_text, :rating, "games.id AS game_id", "games.name AS name", "games.image_url AS image_url", "games.genre AS genres")
      .where(user_id: params[:userId])
    render json: reviews, status: :ok
  end

  def byGame
    reviews = Review
      .joins(:user)
      .select(:id, :rating, :review_text, "users.username AS username", "users.id AS user_id")
      .where(game_id: params[:game_id])
    render json: reviews, status: :ok
  end 

  def create
    review = Review.create!(user_id: params[:userId], game_id: params[:gameId], review_text: params[:reviewText], rating: params[:rating])
    reviewWithUsername = Review
      .joins(:user)
      .select(:rating, :review_text, :"users.username", "users.id AS user_id")
      .find(review.id)
    render json: reviewWithUsername, status: :created 
  end 

  def editReview
    review = Review.find_by(id: params[:id])
    if review
      if review.update(review_params)
        render json: review
      else
        render json: { error: "Failed to update the review", errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end 

  def deleteReview
    Review.destroy(params[:id])
    head :no_content
  end 

  private 

  def review_params 
      params.permit(:review_text, :rating, :user_id, :game_id)
  end

  def authorize 
    render json: { error: ["User must be logged in"] }, status: 401 unless session[:user_id]
  end


end

