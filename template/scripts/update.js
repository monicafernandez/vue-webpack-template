'use strict';

var token = require('./utils/token'),
    registerWidget = require('./utils/registerWidget'),
    reader = require('./utils/read-config-stdin');

reader.readConfiguration(function (config) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    token.getToken(config, function (sessionId) {
        registerWidget.update(config, sessionId);
    });
});
