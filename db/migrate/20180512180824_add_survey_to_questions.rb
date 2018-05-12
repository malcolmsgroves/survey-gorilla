class AddSurveyToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_reference :questions, :survey, index: true
  end
end
