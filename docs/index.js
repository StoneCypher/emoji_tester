var et = (function (exports) {
    'use strict';

    function bootstrap() {
        console.log('Started');
    }
    window.onload = bootstrap;

    exports.bootstrap = bootstrap;

    return exports;

})({});
