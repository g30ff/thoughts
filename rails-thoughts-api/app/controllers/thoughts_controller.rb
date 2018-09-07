class ThoughtsController < ApplicationController
    def index
        if (params[:category_id])
            @thoughts = Category.find(params[:category_id]).thoughts
        else
            @thoughts = Thought.all 
        end

        render json: { thoughts: @thoughts}
        
    end
  
    def show
        id = params[:id]
        render json: { thought: Thought.find(id) }, include: :category
    end
  
    def create
        if (params[:category_id])
            @thoughts = Category.find(params[:category_id]).thoughts.new(thought_params)
        else
            @thoughts = Thought.new(thought_params); 
        end

        if @thoughts.save
            render json: { thought: @thoughts }
          else
            render json: { message: 'Some fields are invalid', errors: @thoughts.errors }, status: :bad_request
          end
    end
  
    def update
        id = params[:id]
        thought = Thought.find(id)
        if thought.update(thought_params)
            render json: { thought: thought }
        else
            render json: { message: 'Some fields are invalid', errors: thought.errors }, status: :bad_request
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
        params.require(:thought)
        .permit(:title, :thought, :active, :category_id, :user_id)
    end
end
# @tenant = Tenant.find(params[:id])
#       if @tenant.update(tenant_params)
#         render json: { tenant: @tenant}
#       else
#         render json: { message: 'Some fields are invalid', errors: @tenant.errors }, status: :bad_request
#       end