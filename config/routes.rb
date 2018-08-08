Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :show, :destroy]
    resources :users, only: [:create, :show, :update]
  end
  root "static_pages#root"
end
