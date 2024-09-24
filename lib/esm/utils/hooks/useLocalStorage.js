import { useCallback, useEffect, useState } from 'react';
import { parseNestedJSON } from './useKubevirtUserSettings/utils/utils';
import { EVENT_LOCALSTORAGE } from './constants';
var event = new Event(EVENT_LOCALSTORAGE);
var useLocalStorage = function (key, initialValue) {
    var _a = useState(parseNestedJSON(localStorage.getItem(key))), value = _a[0], setValue = _a[1];
    var setLocalStorageValue = function (val) {
        localStorage.setItem(key, JSON.stringify(val));
        document.dispatchEvent(event);
    };
    if (!value && initialValue) {
        setLocalStorageValue(initialValue);
    }
    var removeItem = function () {
        localStorage.removeItem(key);
        document.dispatchEvent(event);
    };
    var localStorageSetHandler = useCallback(function () {
        setValue(parseNestedJSON(localStorage.getItem(key)));
    }, [key]);
    useEffect(function () {
        document.addEventListener(EVENT_LOCALSTORAGE, localStorageSetHandler, false);
        return function () {
            document.removeEventListener(EVENT_LOCALSTORAGE, localStorageSetHandler, false);
        };
    }, [localStorageSetHandler]);
    return [value, setLocalStorageValue, removeItem];
};
export default useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map