/**
 * Created by yuriy.horobey on 25-Apr-16.
 */
function Map(mapId, centerLongitude, centerLatitude, zoom) {
    var _map;
    var _featuresCollection;
    var _markersLayer;
    var _epsg4326;
    var _projectTo;
    this.updateFeatures = function (featuresCollection) {
        var vectorLayer = new OpenLayers.Layer.Vector("Overlay");


        // Define markers as "features" of the vector layer:
        var features = featuresCollection.getFeatures();
        var feature, openLayerFeature, featureLongitude, featureLatitude, featureDescription, featureMarker;
        for (var i = 0; i < features.length; i++) {
            feature = features[i];
            featureLatitude = feature.getLatitude();
            featureLongitude = feature.getLongitude();
            featureDescription = feature.getDescription();
            featureMarker = feature.getMarker();

            openLayerFeature = new OpenLayers.Feature.Vector(
                new OpenLayers.Geometry.Point(featureLongitude, featureLatitude).transform(_epsg4326, _projectTo),
                {description: featureDescription},
                featureMarker
            );
            vectorLayer.addFeatures(openLayerFeature);
        }

        _map.addLayer(vectorLayer);
        //Add a selector control to the vectorLayer with popup functions
        var controls = {
            selector: new OpenLayers.Control.SelectFeature(vectorLayer, {
                onSelect: createPopup,
                onUnselect: destroyPopup
            })
        };

        function createPopup(openLayerFeature) {
            openLayerFeature.popup = new OpenLayers.Popup.FramedCloud("pop",
                openLayerFeature.geometry.getBounds().getCenterLonLat(),
                null,
                '<div class="markerContent">' + openLayerFeature.attributes.description + '</div>',
                null,
                true,
                function () {
                    controls['selector'].unselectAll();
                }
            );
            //openLayerFeature.popup.closeOnMove = true;
            _map.addPopup(openLayerFeature.popup);
        }

        function destroyPopup(openLayerFeature) {
            openLayerFeature.popup.destroy();
            openLayerFeature.popup = null;
        }

        _map.addControl(controls['selector']);
        controls['selector'].activate();

    }.bind(this);
    function _init() {
        _map = new OpenLayers.Map(mapId);
        _map.addLayer(new OpenLayers.Layer.OSM());

        _epsg4326 = new OpenLayers.Projection("EPSG:4326"); //WGS 1984 projection
        _projectTo = _map.getProjectionObject(); //The map projection (Spherical Mercator)

        var lonLat = new OpenLayers.LonLat(centerLongitude, centerLatitude).transform(_epsg4326, _projectTo);

        _map.setCenter(lonLat, zoom);


    }

    _init();
}