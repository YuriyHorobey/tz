/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .constant('CFG', {
        SERVER: {
            /**
             * Interval between requests to server for messages update.
             *
             * Measured in milliseconds.
             */
            PULL_TIME: 3000,
            URL:       {
                LOAD: '/load',
                ADD:  '/add'
            }
        },

        TEMPLATES: {
            URL_ROOT:               '/templates',
            ATTR_NAME:              'template',
            ERROR_MISSING_TEMPLATE: '_missing_template',
            AVAILABLE_SKINS:        [
                'default'
            ]
        },
        USER:      {
            ANONYMOUS: {
                ALLOWED: false,
                NAME:    '~anonymous~'
            }
        },
        //messaging $scope.$on()..
        ON:        {
            FEED: {
                UPDATED: 'some newe messages arrived'
            }
        }
    });
