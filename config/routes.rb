Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :home 
  # get "/test", to: "home#coba"
  root "home#index"
end
