require 'spec_helper'

describe FoosController do

    before(:each) do
        request.env['HTTP_ACCEPT'] = 'application/json'
        @foo = Foo.create(:name => "Ruby")
    end

    describe "GET index" do
        it "should return a list of all foos" do
            get :index
            JSON.parse(response.body).should == JSON.parse([@foo].to_json)
            @foo_other = Foo.create(:name => "Rails")
            get :index
            JSON.parse(response.body).should == JSON.parse([@foo, @foo_other].to_json)
        end
    end

    describe "GET show" do
        it "should return a Foo" do
            get :show, :id => @foo
            JSON.parse(response.body).should == JSON.parse(@foo.to_json)
        end
    end

    describe "POST create" do
        it "should increase the amount of Foos by 1" do
            expect{ post :create, :foo => {:name => "Rails"} }.to change(Foo, :count).by(1)
        end
    end

    describe "PUT update" do
        it "should update the Foos name" do
            @foo.name.should_not == "Rails"
            put :update, :id => @foo, :foo => {:name => "Rails"}
            @foo.reload.name.should == "Rails"
        end
    end

    describe "DELETE destroy" do
        it "should decrease the amount of Foos by 1" do
            expect{ get :destroy, :id => @foo }.to change(Foo, :count).by(-1)
        end
    end

    describe "Foos methods" do
        it "hould return possible values for name attribute" do
            Foo.stub(:possible_names).with().and_return(["All possible names"])
            get :possible_names
            JSON.parse(response.body).should == JSON.parse(["All possible names"].to_json)
        end
    end
end
