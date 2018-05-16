# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_15_194842) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "date_answers", force: :cascade do |t|
    t.date "value"
    t.bigint "response_id"
    t.bigint "question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_date_answers_on_question_id"
    t.index ["response_id"], name: "index_date_answers_on_response_id"
  end

  create_table "mc_answers", force: :cascade do |t|
    t.bigint "response_id"
    t.bigint "question_id"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_mc_answers_on_question_id"
    t.index ["response_id"], name: "index_mc_answers_on_response_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "options"
    t.string "question"
    t.string "question_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "survey_id"
    t.index ["survey_id"], name: "index_questions_on_survey_id"
  end

  create_table "responses", force: :cascade do |t|
    t.bigint "survey_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["survey_id"], name: "index_responses_on_survey_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "txt_answers", force: :cascade do |t|
    t.bigint "response_id"
    t.bigint "question_id"
    t.text "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_txt_answers_on_question_id"
    t.index ["response_id"], name: "index_txt_answers_on_response_id"
  end

  add_foreign_key "date_answers", "questions"
  add_foreign_key "date_answers", "responses"
  add_foreign_key "mc_answers", "questions"
  add_foreign_key "mc_answers", "responses"
  add_foreign_key "responses", "surveys"
  add_foreign_key "txt_answers", "questions"
  add_foreign_key "txt_answers", "responses"
end
