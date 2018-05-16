class CreateDataAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :date_answers do |t|
      t.date :value
      t.references :response, foreign_key: true
      t.references :question, foreign_key: true

      t.timestamps
    end
  end
end
