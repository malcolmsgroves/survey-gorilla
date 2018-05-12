Rails.application.routes.draw do
  scope '/api' do
    resources :surveys
  end
end
