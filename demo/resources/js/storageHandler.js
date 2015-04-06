StorageHandler = function(options) {
    var model = options.model,
        data;

    if (!Modernizr.localstorage) {
        // Localstorage not supported, gracefully fallback to... do nothing :-)
        return;
    }
    data = window.localStorage.getItem("towform");
    if (data) {
        model.set(JSON.parse(data));
    }

    model.on("save", function() {
        window.localStorage.setItem("towform", JSON.stringify(model.toJSON()));
    });
};