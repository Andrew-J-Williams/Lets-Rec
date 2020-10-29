class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users
    end

    def create
        @user = User.new(user_params)

        if @user.save
            session[:user_id] = @user.id
            render json: @user
        else
            render json: {error: 'Invalid User Credentials.'}
        end
    end

    def show
        @user = User.find_by_id(params[:id])

        render json: @user
    end


    private

    def user_params
        params.require(:user).permit(:id, :username, :email, :password)
    end

end
