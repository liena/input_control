class Foo < ActiveRecord::Base
  attr_accessible :name
  validates_presence_of :name

  def self.possible_names
    ["Vladlena", "Shumilo", "Ruby", "Rails"] 
  end
end

#Generated with rails generate scaffold Foo name:string value:string

# == Schema Information
#
# Table name: foos
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#