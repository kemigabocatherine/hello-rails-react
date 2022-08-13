Rails.application.routes.draw do
  root to: 'static#index'
  namespace :v1, defaults: {format: 'json'} do
    get 'greetings', to: 'greetings#index'
  end
end
