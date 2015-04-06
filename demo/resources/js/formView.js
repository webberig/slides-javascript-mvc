FormView = Backbone.View.extend({
    initialize: function() {
        this.stickit();
    },
    events: {
        "submit": "onSubmit"
    },
    bindings: {
        '[name=address1]': 'address1',
        '[name=address2]': 'address2',
        '[name=postal]': 'postal',
        '[name=city]': 'city'
    },
    onSubmit: function(e) {
        e.preventDefault();
        if (this.model.isValid()) {
            this.model.trigger("save");
        }
    }
});