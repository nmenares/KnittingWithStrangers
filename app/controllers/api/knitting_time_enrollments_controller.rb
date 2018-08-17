class Api::KnittingTimeEnrollmentsController < ApplicationController

  def show
    @knitting_time_enrollment = KnittingTimeEnrollment.find_by(id: params[:id])
  end

  def create
    @knitting_time_enrollment = KnittingTimeEnrollment.new(knitting_time_enrollment_params)
    if @knitting_time_enrollment.save
      render :show
    else
      render json: @knitting_time_enrollment.errors.full_messages, status: 422
    end
  end

  def destroy
    knitting_time_enrollment = KnittingTimeEnrollment.find_by(id: params[:id])
    knitting_time_enrollment.destroy
  end

  private

  def knitting_time_enrollment_params
    params.require(:enrollment).permit(:user_id, :knittingtime_id)
  end

end
