Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :show, :destroy]
    resources :users, only: [:create, :show, :update]

    resources :areas, only: [:create, :index] do
      resources :knitting_times, only: [:create]
    end

    resources :knitting_times, only: [:show, :update, :destroy] do
      resources :kitting_times_enrollments, only: [:create]
    end

      resources :kitting_times_enrollments, only: [:destroy]

  end
  root "static_pages#root"
end
