class AuthController < ApplicationController
    def auth
        if current_user
            render json: current_user, status: 201
        else 
            render json: {error: "Invalid username or password"}, status: 401
        end
    end
end
