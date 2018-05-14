class CreateTxtAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :txt_answers do |t|
      t.references :response, foreign_key: true
      t.references :question, foreign_key: true
      t.text :value

      t.timestamps
    end

    remove_column :responses, :answers
  end
end
