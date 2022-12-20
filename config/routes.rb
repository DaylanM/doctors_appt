Rails.application.routes.draw do
  namespace :api do
    resources :users
      # resources :appointments
  end
  # get'/:id/doctorusers', to: 'doctors#doctorusers'
  # get'/:id/userdoctors', to: 'users#userdoctors'
  # resources :doctors

end
