class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.references :survey, foreign_key: true
      t.references :question, foreign_key: true
      t.text :answers

      t.timestamps
    end
  end
end
