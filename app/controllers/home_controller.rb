class HomeController < ApplicationController
  def index
    render :nothing => true, :layout => "layouts/application"
  end
end

# rails generate controller home index