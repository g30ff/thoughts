class UsersController < ApplicationController
    def index
        render json: { planets: User.all }
    end
  
    def show
        id = params[:id]
        render json: { planet: User.find(id) }
    end
  
    def create
        user = User.create! user_params
        render json: { user: user }
    end
  
    def update
        id = params[:id]
        user = User.find(id)
        if user.update(user_params)
            render json: { user: user }
        end
    end
  
    def destroy
        id = params[:id]
        user = User.find(id)
        if user.destroy
            render json: { message: "User #{id} deleted" }
        else
            render json: {message: "Error in deleting User #{id}" }
        end
    end
    private
    def user_params
        params.require(:user).permit(:username, :email, :password_digest)
    end
 
end
