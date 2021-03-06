class Api::UsersController < ApplicationController

  def me
    @user = current_user
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: ["Nop possible update host information"], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :phone, :photo, :description, :story, :quote)
  end
end
