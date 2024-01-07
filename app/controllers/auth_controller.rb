class AuthController < ApplicationController
  def auth
    if current_owner
        render json: current_owner, status: 201
    else 
        render json: {error: "Invalid username or password"}, status: 401
    end
end
end
