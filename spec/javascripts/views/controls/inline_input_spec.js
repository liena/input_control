describe('Input Control View', function(){
    var foo = {};
    beforeEach(function(){
        this.router = new TestApp.Routers.Main();
        this.server = sinon.fakeServer.create();
        foo = new TestApp.Models.Foo();
        inlineInputView = new TestApp.Views.Controls.InlineInput({model: foo});
        $('#test').html(inlineInputView.render().el);
    });
    afterEach(function () { 
        this.server.restore();
        Backbone.history.stop();
    });
    describe('instantiation', function(){
        it('should create a tagname', function(){
            expect(inlineInputView.el.nodeName).toEqual('DIV');  
        });
        it('should create a name for the class', function(){
            expect($(inlineInputView.el).attr('class')).toEqual('inline-input-container');
        });
        it('should render all components', function(){
            expect(inlineInputView.$el.find("div.info-section").length).toEqual(1);
            expect(inlineInputView.$el.find("div.info-section select.value-options").length).toEqual(1);
            expect(inlineInputView.$el.find("div.info-section label.current-selection").length).toEqual(1);
            expect(inlineInputView.$el.find("div.info-section label.current-selection").text().trim()).toEqual('Unset');
            expect(inlineInputView.$el.find("a.actions").length).toEqual(3);
            expect(inlineInputView.$el.find("a.edit").length).toEqual(1);
            expect(inlineInputView.$el.find("a.cancel").length).toEqual(1);
            expect(inlineInputView.$el.find("a.save").length).toEqual(1);
        });
    });
    describe('click event', function(){
        it('should update UI on edit', function(){
            var saveButton = inlineInputView.$el.find("a.save");
            var cancelButton = inlineInputView.$el.find("a.cancel");
            var nameOptions = inlineInputView.$el.find("select.value-options");
            var currentName = inlineInputView.$el.find("label.current-selection");
            var editButton = inlineInputView.$el.find("a.edit");
            expect(saveButton.hasClass('hide')).toBeTruthy;
            expect(cancelButton.hasClass('hide')).toBeTruthy;
            expect(nameOptions.hasClass('hide')).toBeTruthy;
            expect(currentName.hasClass('hide')).toBeFalsy;
            expect(editButton.hasClass('hide')).toBeFalsy;
            editButton.trigger('click');
            expect(saveButton.hasClass('hide')).toBeFalsy;
            expect(cancelButton.hasClass('hide')).toBeFalsy;
            expect(nameOptions.hasClass('hide')).toBeFalsy;
            expect(currentName.hasClass('hide')).toBeTruthy;
            expect(editButton.hasClass('hide')).toBeTruthy;
        });
        it('should save input value changes', function(){
            var editButton = inlineInputView.$el.find("a.edit");
            var saveButton = inlineInputView.$el.find("a.save");
            var currentName = inlineInputView.$el.find("label.current-selection");
            expect(currentName.text()).toEqual("Unset");
            editButton.trigger('click');
            saveButton.trigger('click');
            this.server.respondWith('POST', '/foos',function(xhr,id){
                xhr.respond( 201, { "Content-Type": "application/json" },'{"updated_at":"2013-03-11T19:25:56Z","name":"NewName","id":13,"created_at":"2013-03-11T19:25:56Z"}')});
            this.server.respond();
            expect(currentName.text()).toEqual("NewName");
        });
        it('should cancel input value changes', function(){
            var editButton = inlineInputView.$el.find("a.edit");
            var cancelButton = inlineInputView.$el.find("a.cancel");
            var currentName = inlineInputView.$el.find("label.current-selection");
            expect(currentName.text()).toEqual("Unset");
            editButton.trigger('click');
            cancelButton.trigger('click');
            expect(currentName.text()).toEqual("Unset");
        });
    });
});
