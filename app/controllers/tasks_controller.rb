class TasksController < ApplicationController

    def index
        @tasks = Task.all
    end

    def show
        @task = Task.find_by(id: params[:id])
        render 'show'
    end

    def update
        
        @task = Task.find-by(id: params[:id])
        @task.update(task_params)
    end



    private

    def task_params
        params.require(:task).permit(:name, :status)
    end
end
