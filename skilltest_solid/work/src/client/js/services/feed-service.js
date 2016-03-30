/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .service('feedService', [
        'CFG', 'MessageModel', 'pubsubService', '$http',
        function (CFG, MessageModel, pubsub, $http) {
            var _messages = [];
            this.getMessages = function () {
                return _messages;
            };
            this.addMessage = function (user, text) {

            }
            function _loadMessages() {
                var lastMessage = _messages.length ? _messages[_messages.length - 1] : null;
                var timestamp = lastMessage ? lastMessage.getTimestamp() : 0;

                var config = {
                    method:  'GET',
                    url:     CFG.SERVER.URL.LOAD,
                    data:    {},
                    params:  {
                        timestamp: timestamp
                    },
                    headers: {}
                };

                var promise = $http(config);

                promise.error(function (data, status, headers, config) {
                    //TODO: implement feed error handling!
                });

                return promise;
            }

            function _loadMessagesLoop() {

                _loadMessages()
                    .then(function (res) {
                        try {
                            var newMessages = res.data;
                            newMessages.forEach(function (newMessageDTO) {
                                var newMessage = new MessageModel(
                                    newMessageDTO._id,
                                    newMessageDTO.user,
                                    newMessageDTO.text,
                                    newMessageDTO.timestamp
                                );
                                _messages.push(newMessage);
                            });
                            pubsub.pub(CFG.ON.FEED.UPDATED, newMessages);
                        } catch (e) {
                            throw new Error('feedService: Failed to load messages.\n' + e);
                        }
                    })
                    .finally(function () {
                        setTimeout(_loadMessagesLoop, CFG.SERVER.PULL_TIME);
                    });

            }

            function _init() {
                _loadMessagesLoop();
            }

            _init();
        }]);