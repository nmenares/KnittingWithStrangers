class Api::KnittingTimesController < ApplicationController

  def show
    @knitting_time = KnittingTime.find_by(id: params[:id])
  end

  def create
    @knitting_time = KnittingTime.new(knitting_time_params)
    if @knitting_time.save
      render "api/knitting_times/show"
    else
      render json: ["Nop possible create this knitting time"], status: 401
    end
  end

  def update
    @knitting_time = KnittingTime.find_by(id: params[:id])
    if @knitting_time.update_attributes(knitting_time_params)
      render "api/knitting_times/show"
    else
      render json: ["Nop possible update this knitting time"], status: 401
    end
  end

  def destroy
    knitting_time = KnittingTime.find_by(id: params[:id])
    knitting_time.destroy
    render "api/areas/index"
  end

  private

  def knitting_time_params
    params.require(:knitting_time).permit(:date, :start_time, :end_time, :address_1, :address_2, :city, :state, :area_id, :host_id, :description)
  end

end
