/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .directive('chatForm', ['templateService', function (templateService) {
        return {
            restrict:    'E',
            scope:       {},
            templateUrl: templateService.dirTemplateUrl,
            controller:  ['$scope', function () {
            }],
            link:        function () {
            }
        };
    }]);