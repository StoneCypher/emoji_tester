var et = (function (exports) {
    'use strict';

    function make_logger({ symbol }) {
        return function (text) {
            console.log(`${symbol ? (symbol + ' ') : ''}${text}`);
        };
    }

    const log = make_logger({ symbol: '🧠' });
    function refigure() {
        const out = document.getElementById('output');
        if (out === null) {
            return;
        }
        const ta = document.getElementById('input_ta');
        if (ta === null) {
            return;
        }
        const notEmptyString = (tx) => tx !== '', parseAsHex = (ch) => String.fromCodePoint(parseInt(ch, 16));
        const terms = ta.value.replace('\r\n', '\n')
            .replace('\r', '\n')
            .split(' ')
            .filter(notEmptyString)
            .map(parseAsHex);
        out.innerHTML = terms.join('');
    }
    function bootstrap() {
        const ta = document.getElementById('input_ta');
        if (ta === null) {
            return;
        }
        ta.onkeyup = () => refigure();
        log('ET Started');
    }
    window.onload = bootstrap;
    function append(newtext) {
        const ta = document.getElementById('input_ta');
        if (ta === null) {
            return;
        }
        ta.value = ta.value + newtext + ' ';
        refigure();
    }

    exports.append = append;
    exports.bootstrap = bootstrap;

    return exports;

})({});
