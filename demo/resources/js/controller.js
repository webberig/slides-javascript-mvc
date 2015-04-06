Controller = function() {
    var model = new Backbone.Model();

    this.storageHandler = new StorageHandler({
        model: model
    });
    this.formView = new FormView({
        el: document.getElementById("frmTow"),
        model: model
    });
    this.geolocationHandler = new GeolocationHandler({
        model: model
    });

    this.model = model;
    this.listenTo(model, "save", this.onSave);
};
_.extend(Controller.prototype, Backbone.Events);
_.extend(Controller.prototype, {
    onSave: function() {
        // Ajax call goes here
        alert("Form sent successfully");
    }
});