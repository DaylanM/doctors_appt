Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :appointments
      get '/avausers', to: 'appointments#avausers'
  end
  get'/:id/doctorusers', to: 'doctors#doctorusers'
  get'/:id/userdoctors', to: 'users#userdoctors'
  resources :doctors
  end
end
