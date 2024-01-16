class UsersController < ApplicationController
  skip_before_action :isAuthorized, only: :create

  def create
      @user = User.create!(user_params)
      login_user
      render json: @user, status: :created
  end 

  def show
    user = User.find(params[:id])
    if user
      render json: {username: user.username, games: user.games}, status: :ok 
    else 
      render json: "no user found with id", status: 404 
    end 
  end 

  private 

  def user_params 
      params.permit(:username, :password)
  end
end
