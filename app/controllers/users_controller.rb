class UsersController < ApplicationController
  skip_before_action :isAuthorized, only: :create

  def create
      @user = User.create!(user_params)
      login_user
      render json: @user, status: :created
  end 

  private 

  def user_params 
      params.permit(:username, :password)
  end
end
