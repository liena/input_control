class FoosController < ApplicationController
  respond_to :json

  #GET
  def index
    foos = Foo.all
    respond_with foos
  end

  #GET
  def show
    foo = Foo.find(params[:id])
    respond_with foo
  end

  # POST
  def create
    foo = Foo.create(params[:foo])
    respond_with foo
  end

  # PUT
  def update
    foo = Foo.find(params[:id])
    foo.update_attributes(params[:foo])
    respond_with foo
  end

  # DELETE
  def destroy
    foo = Foo.find(params[:id])
    foo.destroy
    respond_with foo
  end

  # GET
  def possible_names
    respond_with Foo.possible_names
  end
end
