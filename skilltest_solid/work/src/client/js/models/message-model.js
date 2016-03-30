/**
 * Created by yuriy.horobey on 2016-01-31.
 */
angular
    .module('skilltest')
    .factory('MessageModel', [
        'CFG', //config, see app.js
        function (CFG) {
            function MessageModel(id, user, text, timestamp) {
                var _id;
                var _user;
                var _text;
                var _timestamp;
                this.getId = function () {
                    return _id;
                };
                this.getUser = function () {
                    return _user;
                }
                this.getText = function () {
                    return _text;
                };
                this.getTimestamp = function () {
                    return _timestamp;
                };
                //privates
                function _setId(id) {
                    _id = id;
                }

                function _setUser(user) {
                    user = ('' + user).trim();
                    if (!user) {
                        if (CFG.USER.ANONYMOUS.ALLOWED) {
                            user = CFG.USER.ANONYMOUS.NAME;
                        } else {
                            throw new Error('MessageModel: wrong user name: "' + user + '"');
                        }
                    }
                    _user = user;
                }

                function _setText(text) {
                    text = ('' + text).trim();
                    if (!text) {
                        throw new Error('MessageModel: empty text');
                    }
                    _text = text;
                }

                function _setTimestamp(timestamp) {
                    //TODO: any cheking huh?
                    _timestamp = timestamp;
                }

                function _init(id, user, text, timestamp) {
                    _setId(id);
                    _setUser(user);
                    _setText(text);
                    _setTimestamp(timestamp);
                }

                _init(id, user, text, timestamp);
            }

            return MessageModel;
        }]);