class Api::V1::UserTeamsController < ApplicationController

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

    def post_params
        params.require(:post).permit(:id, :user_id, :team_id)
    end


end
