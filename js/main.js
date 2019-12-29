var BookModel = Backbone.Model.extend({

    initialize: function(){
        console.log('Book Model initialize');
    },

    defaults: {
        isbnNumber: 0
    }
});

var BookView = Backbone.View.extend({
    model : BookModel,

    initialize: function(){
        console.log('Book View initialize');

        this.model.on('change', this.onModelChange, this);

        
        
    },

    render: function(){
        console.log('render function called');
        
        var source = $('#bookTemplate').html();
        var template = _.template(source);

        this.$el.html(template(this.model.toJSON()));

        // var template = _.template($("#bookTemplate").html());
        // var html = template();
        // this.$el.html(html);    

        
        console.log('returning this');
        return this;
    },

    events: {
        'click #button1': 'onButton1Click'
    },

    onButton1Click: function(){
        console.log('Button1 clicked');
        window.setInterval(this.callbackFunction, 4000);
        // let randomNumber = Math.floor(Math.random()*10000);
        // bookModel.set('isbnNumber', randomNumber);
    },

    onModelChange: function(){
        // console.log('ok looks like the model got change');
        this.render();

        
    },

    callbackFunction: function(){

        let randomNumber = Math.floor(Math.random()*10000);
        bookModel.set('isbnNumber', randomNumber);
        
    }
});

var bookModel = new BookModel({
    
});

var bookView = new BookView({
    el : '#container',
    model : bookModel
});
bookView.render();