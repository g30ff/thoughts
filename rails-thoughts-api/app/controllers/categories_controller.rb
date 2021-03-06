class CategoriesController < ApplicationController
    before_action :authenticate_user
    before_action :set_category, only: [:show, :update, :destroy]
    def index
        render json: { categories: Category.all }, include: :thoughts
    end
  
    def show
        id = params[:id]
        render json: { category: Category.find(id) }, include: :thoughts
    end
  
    def create
        @new_category = Category.new(category_params)
        if @new_category.save
            render json: { category: @new_category }, include: :thoughts
          else
            render json: { message: 'Some feilds are invalid', errors: @new_category.errors}, status: :bad_request 
          end
    end
  
    def update
        id = params[:id]
        category = Category.find(id)
        if category.update(category_params)
            # render json: { category: category }
            render json: category.to_json(include: :thoughts)
        else
            render json: { message: 'Some feilds are invalid', errors: category.errors}, status: :bad_request
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
    def set_category
        @category = Category.find(params[:id])
    end
    def category_params
        params.require(:category).permit(:title, :user_id)
    end
end