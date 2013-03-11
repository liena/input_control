TestApp.Models.Foo = Backbone.Model.extend({
  initialize: function( attributes ) {
    this.nameOptions = new Backbone.Model();
    this.nameOptions.url = function(){
    	return '/foos/possible_names';
    };
  },
  urlRoot: '/foos'
});