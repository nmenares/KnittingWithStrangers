class Api::AreasController < ApplicationController

  def index
    @areas = Area.all
  end

  def create
    @area = area.new(area_params)
    if @area.save
      render "api/areas/index"
    else
      render json: @area.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:area).permit(:name)
  end

end
