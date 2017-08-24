class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      render json: "Credentials were wrong"
    else
      login!(user)
      redirect_to user_url(user)
    end
  end

  def new
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  private

  def show
    user = User.find_by(id: params[:id])
    if user
      render :show
    else
      render json: user.errors.full_messages
    end

  end
end
