/* EduFlow - API location. Load FIRST on every page.
 * Same-origin (Flask serves the pages): leave API_BASE empty.
 * GitHub Pages (static front-end): set it to your HTTPS backend, e.g. 'https://eduflow-api.onrender.com' */
(function (global) {
    'use strict';
    var API_BASE = '';
    global.EDUFLOW_API_BASE = (global.EDUFLOW_API_BASE || API_BASE).replace(/\/+$/, '');
    if (!global.EDUFLOW_API_BASE) return;
    var nativeFetch = global.fetch.bind(global);
    global.fetch = function (input, init) {
        if (typeof input === 'string' && /^\/(api|uploads)\//.test(input)) {
            input = global.EDUFLOW_API_BASE + input;
        }
        return nativeFetch(input, init);
    };
})(window);
