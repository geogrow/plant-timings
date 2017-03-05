class Api::PlantsController < ApplicationController
  def index
    render json: Plant.all
  end

  def show
    list = Plant.find(params[:id])
    render json: list
  end
end
