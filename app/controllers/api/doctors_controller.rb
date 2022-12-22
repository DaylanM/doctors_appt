class Api::DoctorsController < ApplicationController
 before_action :set_doctors, only: [:show, :update, :destroy, :doctorusers]
 
  def index
    render json: Doctor.all
  end

  def show
    render json: @doctor
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      render json: @doctor
    else
      render json: {errors: @doctor.errors },  status: :unprocessable_entity
    end
  end

  def update
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: {errors: @doctor.errors },  status: :unprocessable_entity
    end
  end

  def destroy
    @doctor.destroy
    render json:{ message: 'Bye Bye Doc'}
  end

  def doctorusers
    render json: @doctor.users
  end
 
  private
    def doctor_params
      params.require(:doctor).permit(:first_name, :last_name, :practice)
    end
    
    def set_doctors
      @doctor = Doctor.find(params[:id])
    end
end
