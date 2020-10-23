class Api::V1::UserTeamsController < ApplicationController

    before_action :set_user_team, only: [:show, :update, :destroy]
    #before_action :set_user
    #before_action :set_team

    def index
        @user_teams = UserTeam.all

        render json: @user_teams
    end

    def show
        #@user_team.user = @user
        #@user_team.team = @team

        render json: @user_team
    end

    def create
        @user_team = UserTeam.new(user_team_params)

        if @user_team.save
            render json: @user_team
        else
            render json: {error: 'We could not process your team at this time.'}
        end
    end

    def update
        if @user_team.save
            render json: @user_team
        else
            render json: {error: 'We could not modify your team at this time.'}
        end
    end

    def destroy
        @user_team.destroy
    end

    private

    def user_team_params
        params.require(:user_team).permit(:id, :user_id, :team_id)
    end

    def set_user_team
        @user_team = UserTeam.find(params[:id])
    end

    #def set_user
    #    @user = User.find(params[:user_id])
    #end

    #def set_team
    #    @team = Team.find(params[:team_id])
    #end
end
