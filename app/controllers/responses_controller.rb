class ResponsesController < ApplicationController
  def create
    parameters = response_params
    @response = Response.create(parameters.slice(:survey_id))
    parameters[:answers].each do |answer|
      case answer[:question_type]
      when "mc"
        @response.mc_answers.create(answer.slice(:value, :question_id))
      when "txt"
        @response.txt_answers.create(answer.slice(:value, :question_id))
      end
    end
  end

  private
  
  def response_params
    params.require(:response).permit(:survey_id, :answers => [:value, :question_type, :question_id])
  end
end
