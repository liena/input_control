describe('Foo Model', function(){
	var foo = {}; 

	beforeEach(function(){
		foo = new TestApp.Models.Foo();
	});

	it('should have a urlRoot', function(){
    	expect(foo.urlRoot).toEqual('/foos');
  	}); 

  	it('should set the nameOptions url', function(){
  		expect(foo.nameOptions instanceof Backbone.Model).toBeTruthy();
  		expect(foo.nameOptions.url()).toEqual('/foos/possible_names');
  	});
});