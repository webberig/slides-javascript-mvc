MapView = Backbone.View.extend({
    initialize: function() {
        var that = this;
        google.maps.event.addDomListener(window, 'load', function() {
            var mapOptions = {
                center: { lat: 49.392879 , lng: -121.443238},
                zoom: 8
            };
            that.map = new google.maps.Map(that.el, mapOptions);
            that.marker = new google.maps.Marker({
                position: new google.maps.LatLng(49.392879, -121.443238),
                draggable: true
            });
            that.marker.setMap(that.map);
            that.updateMarkerPosition();
            google.maps.event.addListener(that.marker, 'dragend', _.bind(that.onDrag, that));
            that.listenTo(that.model, "change:lat change:lng", that.updateMarkerPosition);
            that.map.setCenter(that.marker.getPosition());

        });
    },
    updateMarkerPosition: function() {
        var position = this.marker.getPosition(),
            newPosition;

        if (this.model.has("lat") && this.model.has("lng")) {
            if (this.model.get("lat") != position.lat() || this.model.get("lng") != position.lng()) {
                newPosition = new google.maps.LatLng(this.model.get("lat"), this.model.get("lng"));
                this.marker.setPosition(newPosition);
            }
        }
    },
    onDrag: function(e) {
        var position = this.marker.getPosition();
        this.model.set({
            lat: position.lat(),
            lng: position.lng()
        });
    }
});