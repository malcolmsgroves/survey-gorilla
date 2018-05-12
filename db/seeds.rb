# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

5.times do
  survey = Survey.create(user: Faker::Name.name)
  3.times do
    question = survey.questions.build
    question.question = Faker::Lorem.sentence(5)
    answers = []
    4.times do
      answers.push(Faker::Lorem.word)
    end
    question.options = answers
    question.type = "mc"
    question.save
  end
end
  
