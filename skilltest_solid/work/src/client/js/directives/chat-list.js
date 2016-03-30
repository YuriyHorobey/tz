/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .directive('chatList', [
        'CFG', 'templateService', 'feedService',
        function (CFG, templateService, feedService) {
            return {
                restrict:    'E',
                scope:       {},
                templateUrl: templateService.dirTemplateUrl,
                controller:  ['$scope', function ($scope) {

                    $scope.$on(CFG.ON.FEED.UPDATED, function () {
                        $scope.messages = feedService.getMessages();
                    });
                    function _init() {
                        $scope.messages = feedService.getMessages();
                    }

                    _init();
                }],
                link:        function () {
                }
            };
        }]);