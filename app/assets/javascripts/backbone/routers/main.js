TestApp.Routers.Main = Backbone.Router.extend({
	initialize: function( options ){
	},
    routes: {
        'foos':              'fooFactory',
        '*actions':          'defaultRoute'
    },  
    fooFactory: function(){
        var self = this;
        var foo = new TestApp.Models.Foo();
        foo.nameOptions.fetch({
            success: function(){
                var fooInputView = new TestApp.Views.Controls.InlineInput({model: foo});
                $("#content").html(fooInputView.el);
                fooInputView.render();
            }
        });
    },
    defaultRoute: function( actions ){
        Backbone.history.navigate('foos', {trigger: true});
    }
});
