class Response < ApplicationRecord
  belongs_to :survey
  has_many :txt_answers
  has_many :mc_answers
  has_many :date_answers
end
