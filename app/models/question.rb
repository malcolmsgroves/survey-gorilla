class Question < ApplicationRecord
  has_many :mc_answers
  has_many :txt_answers
  has_many :date_answers
  belongs_to :survey
  serialize :options

  validate :mc_answer_xor_txt_answer
  
  private

    def mc_answer_xor_txt_answer
      unless mc_answer.blank? ^ txt_answer.blank?
        errors.add(:base, "Specify a mc_answer or a txt_answer, not both")
      end
    end
end
