import * as React from 'react';
import { useURLParams } from '@kubevirt-utils/hooks/useURLParams';
import useEventListener from './useEventListener';
/**
 * A Hook that returns an input field reference for debouncing the input change callback.
 * @param {number} delay - delay in ms
 * @param callback - callback to be executed after delay
 * @param {string} updateURLParam - name of the URL param to update
 */
export var useInputDebounce = function (_a) {
    var delay = _a.delay, initialValue = _a.initialValue, onChange = _a.onChange, updateURLParam = _a.updateURLParam;
    var typingTimer = null;
    var _b = useURLParams(), params = _b.params, setParam = _b.setParam;
    var _c = React.useState(), value = _c[0], setValue = _c[1];
    var param = params.get(updateURLParam);
    var inputRef = React.useRef(null);
    // eslint-disable-next-line require-jsdoc
    var updateValue = function (v) {
        setValue(v || '');
        if (updateURLParam) {
            setParam(updateURLParam, v);
        }
        if (onChange) {
            onChange(v);
        }
    };
    // eslint-disable-next-line require-jsdoc
    var resetValue = function () {
        var _a;
        setValue('');
        if ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value) {
            inputRef.current.value = '';
        }
    };
    useEventListener('keydown', function () { return clearTimeout(typingTimer); });
    useEventListener('keyup', function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () { var _a; return updateValue(((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) || ''); }, delay);
    });
    React.useEffect(function () {
        if (updateURLParam) {
            setValue(param !== null && param !== void 0 ? param : '');
            inputRef.current.value = param;
        }
    }, [param, updateURLParam]);
    React.useEffect(function () {
        if (initialValue && !value) {
            setValue(initialValue);
            inputRef.current.value = initialValue;
        }
    }, [initialValue, value]);
    return {
        inputRef: inputRef,
        resetValue: resetValue,
        value: value,
    };
};
//# sourceMappingURL=useInputDebounce.js.map