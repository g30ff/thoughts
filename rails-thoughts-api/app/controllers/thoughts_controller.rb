class ThoughtsController < ApplicationController
    def index
        render json: { thoughts: Thought.all }
    end
  
    def show
        id = params[:id]
        render json: { thought: Thought.find(id) }
    end
  
    def create
        thought = Thought.create! thought_params
        render json: { thought: thought }
    end
  
    def update
        id = params[:id]
        thought = Thought.find(id)
        if thought.update(thought_params)
            render json: { thought: thought }
        end
    end
  
    def destroy
        id = params[:id]
        thought = Thought.find(id)
        if thought.destroy
            render json: { message: "Thought #{id} deleted" }
        else
            render json: {message: "Error in deleting Thought #{id}" }
        end
    end
    private
    def thought_params
        params.require(:thought).permit(:title, :thought, :active, :category_id, :user_id)
    end
end
