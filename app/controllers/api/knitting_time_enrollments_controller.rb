class Api::KnittingTimeEnrollmentsController < ApplicationController


  def create
    @knitting_time_enrollment = KnittingTimeEnrollment.new(knitting_time_enrollment_params)
    if @knitting_time_enrollment.save
      render "api/knitting_time/show"
    else
      render json: ["Nop possible join this knitting time"], status: 401
    end
  end

  def destroy
    knitting_time_enrollment = KnittingTimeEnrollment.find_by(id: params[:id]);
    knitting_time_enrollment.destroy
    render "api/knitting_time/show"
  end

  private

  def knitting_time_enrollment_params
    params.require(:knitting_time_enrollment).permit(:user_id, :knittingtime_id)
  end

end
