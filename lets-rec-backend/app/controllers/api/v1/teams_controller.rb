class Api::V1::TeamsController < ApplicationController

    def index

    end

    def show

    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def team_params
        params.require(:team).permit(:id, :name, :sport, :location, :venue, :timeslot, :status, :members)
    end

end
