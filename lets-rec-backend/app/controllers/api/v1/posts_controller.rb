class Api::V1::PostsController < ApplicationController

    before_action :set_post, only: [:show, :update, :destroy]

    def index
        @posts = Post.all
        
        render json: @posts.sort_posts
    end

    def show
        render json: @post
    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render json: @post
        else
            render json: {error: 'We could not process your post at this time.'}
        end
    end

    def update
        if @post.save
            render json: @post
        else
            render json: {error: 'We could not update your post at this time.'}
        end
    end

    def destroy
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:id, :content, :user_id, :team_id)
    end

    def set_post
        @post = Post.find(params[:id])
    end

end
