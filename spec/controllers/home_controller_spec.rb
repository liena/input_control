require 'spec_helper'

describe HomeController do
	
	it "should render nothing with application layout" do
		get :index
		response.body.should == ""
	end

end