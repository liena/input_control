class Foo < ActiveRecord::Base
  attr_accessible :name
end

#Generated with rails generate scaffold Foo name:string value:string

# == Schema Information
#
# Table name: foos
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#