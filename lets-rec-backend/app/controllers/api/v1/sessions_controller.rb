class Api::V1::SessionsController < ApplicationController

    def create
        def create
            @user = User.find_by(username: params[:session][:username])
            session[:user_id] = @user.id 
    
            if @user && @user.authenticate(params[:session][:password])
                render json: @user
             else 
                render json: {error: 'Failed Log In!'}
            end 
    end

    def find_current_user
        if logged_in?
            render json: current_user 
        else
            render json: {error: 'Access Denied. Please Log In.'}
        end
    end

    def destroy
        session.clear

        render json: {notice: 'Logged Out'}
    end

end