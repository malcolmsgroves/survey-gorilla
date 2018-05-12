class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :options
      t.string :question
      t.string :type

      t.timestamps
    end
  end
end
