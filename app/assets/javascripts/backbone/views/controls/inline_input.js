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
		target.addClass('hide')
		el.find('.current-selection').addClass('hide')
		el.find('.save').removeClass('hide');
		el.find('.cancel').removeClass('hide');
		el.find('.value-options').removeClass('hide');
		return false;
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
				currentSelection.text(self.model.get('name'));
				target.addClass('hide')
				el.find('.cancel').addClass('hide')
				valueOptions.addClass('hide')
				el.find('.edit').removeClass('hide');
				currentSelection.removeClass('hide');
			}
		});
		return false;
	},	
	cancelInputValueChanges:function(event){
		var target = $(event.target);
		var el = this.$el;
		target.addClass('hide')
		el.find('.save').addClass('hide')
		el.find('.value-options').addClass('hide')
		el.find('.edit').removeClass('hide');
		el.find('.current-selection').removeClass('hide');
		return false;
	},	
	render:function(){
		var el = this.$el;
		el.html(this.template({foo: this.model}));
		return this;
	}
});