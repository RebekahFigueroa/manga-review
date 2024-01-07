class SessionController < ApplicationController
  skip_before_action :isAuthorized, only: :create
  def create
      @user = User.find_by(username: params[:username])
      if @user&.authenticate(params[:password])
          login_user
          render json: @user, status: :created
      else 
          render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
      end 
  end 


  def destroy
      session.delete :user_id 
      head :no_content
  end
end
