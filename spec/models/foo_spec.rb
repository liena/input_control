require 'spec_helper'

describe Foo do
	describe "validations" do
		it { should validate_presence_of :name }
	end
	describe "class methods" do
		it "should return all possible values for name attribute" do
			Foo.possible_names.should == ["Vladlena", "Shumilo", "Ruby", "Rails"] 
		end
	end
end
