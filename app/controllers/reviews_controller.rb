class ReviewsController < ApplicationController
  before_action :authorize 
  
  def index
    reviews = Review.where(user_id: current_user)
    render json: reviews, status: :ok
  end

  def byGame
    reviews = Review.where(game_id: params[:game_id])
    render json: reviews, status: :ok
  end 

  def create
    review = current_user.reviews.create!(review_params)
    render json: review, status: :created 
  end 

  def update
    review = current_user.reviews.find(params[:id])
    if review
      if review.update!(review_params)
        render json: review
      else
        render json: { error: "Failed to update the review", errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end 

  def destroy
    review =  current_user.reviews.find(params[:id])
    review.destroy
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

