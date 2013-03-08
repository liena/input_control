InlineInput::Application.routes.draw do
  resources :foos do
  	collection do
  		get :possible_names
  	end
  end
  root :to => "home#index"
end