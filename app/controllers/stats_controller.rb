class StatsController < ApplicationController
  def stats 
    user = User.find(params[:user_id])
    numReviewed = user.reviews.count

    render json: {
      numReviewed: numReviewed
    }, status: :ok
  end 
end



# def stats 
#   numReviewed = ...
#   singleOrMultiplayer = ...

#   render json: {
#     numReviewed: numReviewed,
#     ...
#   }
# end