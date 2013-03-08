class HomeController < ApplicationController
  def index
  	@foo = Foo.last
    render :nothing => true, :layout => "layouts/application"
  end
end

# rails generate controller home index