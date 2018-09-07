class CategoriesController < ApplicationController
    def index
        render json: { categories: Category.all }
    end
  
    def show
        id = params[:id]
        render json: { category: Category.find(id) }
    end
  
    def create
        category = Category.create! category_params
        render json: { user: user }
    end
  
    def update
        id = params[:id]
        category = Category.find(id)
        if category.update(category_params)
            render json: { user: user }
        end
    end
  
    def destroy
        id = params[:id]
        category = Category.find(id)
        if category.destroy
            render json: { message: "Category #{id} deleted" }
        else
            render json: {message: "Error in deleting Category #{id}" }
        end
    end
    private
    def user_params
        params.require(:user).permit(:title, :user_id)
    end
end
