import { useEffect, useState } from 'react';
export var useToggle = function (key, defaultValue) {
    if (key === void 0) { key = ''; }
    var _a = useState(function () {
        // Retrieve initial value from localStorage (if available)
        var storedValue = localStorage.getItem(key);
        var parsedValue = storedValue && JSON.parse(storedValue);
        return defaultValue !== undefined ? defaultValue : parsedValue !== null && parsedValue !== void 0 ? parsedValue : false;
    }), isToggled = _a[0], setIsToggled = _a[1];
    // Update localStorage on toggle change
    useEffect(function () {
        localStorage.setItem(key, JSON.stringify(isToggled));
    }, [isToggled, key]);
    var toggle = function () {
        setIsToggled(function (prev) { return !prev; });
    };
    return [isToggled, toggle];
};
//# sourceMappingURL=useToggle.js.map