class Api::V1::SessionsController < ApplicationController

    def new
    end

    def create
        @user = User.find_by(username: params[:session][:username])

        authenticated = @user.try(:authenticate, params[:session][:password])
    
        if authenticated
            session[:user_id] = @user.id 
            render json: @user
        else 
            render json: {error: 'Incorrect Log In!'}
        end 
    end

    def find_current_user
        if logged_in?
            render json: current_user 
        else
            render json: {error: 'Access Denied. Please Log In!'}
        end
    end

    def destroy
        session.clear
    end

end