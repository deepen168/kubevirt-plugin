import * as React from 'react';
import { debounce } from '@kubevirt-utils/utils/debounce';
export var useDebounceCallback = function (callback, timeout, immediate) {
    if (timeout === void 0) { timeout = 500; }
    if (immediate === void 0) { immediate = false; }
    var callbackRef = React.useRef();
    callbackRef.current = callback;
    return React.useMemo(function () {
        return debounce(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callbackRef.current.apply(callbackRef, args);
        }, timeout, immediate);
    }, [immediate, timeout]);
};
//# sourceMappingURL=useDebounceCallback.js.map