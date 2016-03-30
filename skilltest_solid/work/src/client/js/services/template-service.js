/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .service('templateService', [
        'CFG',
        function (CFG) {
            var _this = this;
            var _currentSkin;

            this.dirTemplateUrl = function (element, attributes) {
                var template = attributes[CFG.TEMPLATES.ATTR_NAME];
                if (!template) {
                    template = CFG.TEMPLATES.ERROR_MISSING_TEMPLATE;
                }
                var ret = _getUrl(template);
                return ret;
            }.bind(this);
            this.setSkin = function (skin) {
                skin = ('' + skin).trim();
                if (CFG.TEMPLATES.AVAILABLE_SKINS.indexOf(skin) === -1) {
                    throw new Error('templateService: skin: "' + skin + '" is not available');
                }
                _currentSkin = skin;
            }
            function _getUrl(template) {
                var ret = CFG.TEMPLATES.URL_ROOT + '/' + _currentSkin;
                template = ('' + template).trim();
                if (!template) {
                    throw new Error('templateService: invalid template name: "' + template + '"');
                }
                if (template.substr(0, 1) !== '/') {
                    template = '/' + template;
                }
                if (template.substr(template.length - 5, 5) !== '.html') {
                    template += '.html';
                }
                ret += template;
                return ret;
            }

            function _init() {
                _this.setSkin(CFG.TEMPLATES.AVAILABLE_SKINS[0]);
            }

            _init();
        }]);