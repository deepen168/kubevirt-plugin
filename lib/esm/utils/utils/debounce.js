/**
 * @param func Function to debounce
 * @param wait Number of milliseconds to wait before invoking the function again
 * @param immediate If set to true, func is invoked immediately and will be invoked
 *    on the leading edge of the timeout. If set to false, func will be invoked on
 *    the trailing edge of the timeout.
 */
export function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 0; }
    if (immediate === void 0) { immediate = false; }
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // skipcq: JS-0332
        var context = this; // eslint-disable-line @typescript-eslint/no-this-alias
        if (immediate && !timeout)
            func.apply(context, args);
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
    };
}
//# sourceMappingURL=debounce.js.map