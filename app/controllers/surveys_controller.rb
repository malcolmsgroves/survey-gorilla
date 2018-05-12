class SurveysController < ApplicationController
  def new
  end

  def create
  end

  def show
    @survey = Survey.find(params[:id])
    render json: @survey.to_json(include: :questions)
  end

  def destroy
  end

  def edit
  end

  def index
    render json: Survey.all
  end
end
