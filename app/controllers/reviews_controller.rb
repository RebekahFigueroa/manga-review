class ReviewsController < ApplicationController
  def index
    reviews = Review.where(user_id: current_user)
    render json: reviews, status: :ok
  end

  def byGame
    reviews = Review.where(game_id: params[:game_id])
    render json: reviews, status: :ok
  end 

  def create
    review = Review.create!(user_id: params[:userId], game_id: params[:gameId], review_text: params[:reviewText], rating: params[:rating])
    # TODO: remove and use serializer
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
    review = Review.find(params[:id])
    if review && current_user.id == review.user_id
      Review.destroy(params[:id])
    end
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

