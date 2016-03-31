/**
 * Created by yuriy.horobey on 25-Apr-16.
 */
var _defaultConfig = {
    'map-id': 'map',
    'timeline-id': 'timeline',
    'zoom': 13,
    'latitude': 131.5,
    'longitude': -32.0
}


function App(config) {
    var _map;
    var _timeline;
    var _featuresCollection;
    var _dataprovider;

    this.run = function () {

        _featuresCollection = new FeatureCollection(null, _onDataUpdated);
        _map = new Map(
            config['map-id'] || _defaultConfig['map-id'],
            config['longitude'] || _defaultConfig['longitude'],
            config['latitude'] || _defaultConfig['latitude'],
            config['zoom'] || _defaultConfig['zoom']);
        _timeline = new TimeLine(config['timeline-id'] || _defaultConfig['timeline-id']);
        _dataprovider = new DataProvider(_featuresCollection.updateFromJson);

    }
    function _onDataUpdated(json) {
        _map.updateFeatures(_featuresCollection);
        _timeline.updateFeatures(_featuresCollection);
    }

}