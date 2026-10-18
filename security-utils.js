/* EduFlow - shared front-end security helpers. Load BEFORE the page scripts. */
(function (global) {
    'use strict';
    var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;' };
    /** Escape a value for safe insertion into HTML text or a quoted attribute. */
    global.escapeHtml = function (value) {
        if (value === null || value === undefined) return '';
        return String(value).replace(/[&<>"'`]/g, function (ch) { return MAP[ch]; });
    };
})(window);
