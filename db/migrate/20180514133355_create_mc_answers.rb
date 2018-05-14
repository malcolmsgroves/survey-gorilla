class CreateMcAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :mc_answers do |t|
      t.references :response, foreign_key: true
      t.references :question, foreign_key: true
      t.integer :value

      t.timestamps
    end
  end
end
