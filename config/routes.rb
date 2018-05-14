Rails.application.routes.draw do
  scope '/api' do
    resources :surveys
    resources :responses, only: [:create]
  end
end
