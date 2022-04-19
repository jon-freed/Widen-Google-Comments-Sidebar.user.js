// ==UserScript==
// @name        Widen-Google-Comments-Sidebar.user.js
// @namespace   http://jonfreedwork.space/
// @version     1.0.1
// @description Widens Google Comments Sidebars
// @author      Jonathan (Jon) Freed
// @license     CC0 1.0.  See https://creativecommons.org/publicdomain/zero/1.0/.
// @supportURL  https://github.com/jon-freed/Widen-Google-Comments-Sidebar.user.js
// @downloadURL https://raw.githubusercontent.com/jon-freed/Widen-Google-Comments-Sidebar.user.js/master/Widen-Google-Comments-Sidebar.user.js
// @updateURL   https://raw.githubusercontent.com/jon-freed/Widen-Google-Comments-Sidebar.user.js/master/Widen-Google-Comments-Sidebar.user.js
// @match       https://docs.google.com/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant       GM_addStyle
// ==/UserScript==

(function () {
    "use strict";

    GM_addStyle(`div.docs-docos-activity-sidebar { width: 800px !important; }`);

})();
