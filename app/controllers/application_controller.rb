class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :isAuthorized

  def current_user
    User.find_by(id: session[:user_id])
  end

  def login_user
    session[:user_id] = @user.id
  end
  
  def isAuthorized 
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end 

end
