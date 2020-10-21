class Api::V1::TeamsController < ApplicationController

    before_action :set_team, only: [:show, :update, :destroy]

    def index
        @teams = Team.all

        render json: @teams
    end

    def show
        render json: @team
    end

    def create
        @team = Team.new(team_params)

        if @team.save
            render json: @team
        else
            render json: {error: 'We could not process your team at this time.'}
        end
    end

    def update
        if @team.save
            render json: @team
        else
            render json: {error: 'We could not modify your team at this time.'}
        end
    end

    def destroy
        @team.destroy
    end

    private

    def team_params
        params.require(:team).permit(:id, :name, :sport, :location, :venue, :timeslot, :status, :members)
    end

    def set_team
        @team = Team.find(params[:id])
    end

end
