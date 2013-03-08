TestApp.Views.Controls.InlineInput = Backbone.View.extend({
	initialize: function(options){
	},
	tagName: 'div',
	className: 'inline-input-container',
	template: JST["backbone/templates/controls/inline_input"],
	events: {
		'click .edit': 			'editInput',
		'click .save': 			'saveInputValue',
		'click .cancel': 		'cancelInputValueChanges' 
	},	
	editInput:function(event){
		var target = $(event.target);
		var el = this.$el;
		target.hide();
		el.find('.current-selection').hide();
		el.find('.save').show();
		el.find('.cancel').show();
		el.find('.value-options').show();
	},	
	saveInputValue:function(event){
		var self = this;
		var target = $(event.target);
		var el = this.$el;
		var valueOptions = el.find('.value-options');
		var currentSelection = el.find('.current-selection');
		var attributes = {
			name: 				valueOptions.val()
		};
		this.model.save(attributes,
		{
			success: function(model){
				currentSelection.text(valueOptions.val());
				target.hide();
				el.find('.cancel').hide();
				valueOptions.hide();
				el.find('.edit').show();
				currentSelection.show();
			},
		});
	},	
	cancelInputValueChanges:function(event){
		var target = $(event.target);
		var el = this.$el;
		target.hide();
		el.find('.save').hide();
		el.find('.value-options').hide();
		el.find('.edit').show();
		el.find('.current-selection').show();
	},	
	render:function(){
		var el = this.$el;
		el.html(this.template({foo: this.model}));
		return this;
	}
});