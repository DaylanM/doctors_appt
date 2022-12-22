Rails.application.routes.draw do
  namespace :api do
    resources :doctors do
      resources :appointments
      get '/avausers', to: 'appointments#avausers'
  end
  get'/:id/doctorusers', to: 'doctors#doctorusers'
  get'/:id/userdoctors', to: 'users#userdoctors'
  resources :users
  end
end
