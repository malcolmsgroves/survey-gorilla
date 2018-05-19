class TxtAnswer < ApplicationRecord
  belongs_to :response
  belongs_to :question
  validates :value, presence: true
end
