/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .service('pubsubService', [
        'CFG', '$rootScope',
        function (CFG, $rootScope ) {
            var _this = this;
            this.pub = function (msg, data) {
                if (!msg) {
                    throw new Error('pubsubService: unknown message');
                }
                $rootScope.$broadcast(msg, data);
            }

            function _init() {
            }

            _init();
        }]);