/**
 * Created by yuriy.horobey on 25-Apr-16.
 */
function FeatureCollection(json, onDataUpdated) {
    var _generated;
    var _url;
    var _title;
    var _status;
    var _api;
    var _count;
    var _features;
    var _bbox = [];

    this.getFeatures = function () {
        return _features;
    }.bind(this);

    //object initialization
    this.updateFromJson = function (json) {
        _generated = json['metadata']['generated'];
        _url = json['metadata']['url'];
        _title = json['metadata']['title'];
        _status = json['metadata']['status'];
        _api = json['metadata']['api'];
        _count = json['metadata']['count'];
        _bbox = json['bbox'];
        _features = [];
        for (var i = 0; i < _count; i++) {
            var featureJson = json['features'][i];
            var feature = new Feature(featureJson);
            _features.push(feature);
        }
        if (typeof onDataUpdated === 'function') {
            onDataUpdated(this);
        }
    }.bind(this);
    function _init() {
        if (json) {
            this.updateFromJson(json);
        }
    }

    _init();
}