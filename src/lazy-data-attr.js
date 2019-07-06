/**
 * Lazy Image and Iframe loader data-lazy JSON config
 * Released under the terms of MIT license
 *
 * Copyright (C) 2019 📐 Style.Tools
 * @link https://github.com/style-tools/lazy
 */

// attribute config
var CONFIG;
var CONFIG_PARAM = 'lazy';
var LAZY_SCRIPT = doc.currentScript || QUERY('script[data-' + CONFIG_PARAM + ']');
var MULTI_TOKEN = '||';
if (LAZY_SCRIPT) {

    // extract config from data-optimization parameter
    CONFIG = GET_DATA_ATTR(LAZY_SCRIPT, CONFIG_PARAM);

    // multi config
    if (CONFIG && CONFIG.indexOf(MULTI_TOKEN) === 0) {
        CONFIG = CONFIG.split(MULTI_TOKEN);
    } else {
        CONFIG = [CONFIG];
    }

    var config;
    for (var i = 0, l = CONFIG.length; i < l; i++) {
        try {
            config = JSON.parse(CONFIG);
        } catch (err) {config = false;};

        if (config) {
            $lazy.apply(null, config);
        } else {
            $lazy();
        }
    }
}