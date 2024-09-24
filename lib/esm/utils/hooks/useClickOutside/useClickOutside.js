import { useEffect } from 'react';
import { CLICK, ESCAPE, KEYDOWN, TAB } from './constants';
export var useClickOutside = function (ref, onClickOutside) {
    useEffect(function () {
        var handleClickOutside = function (event) {
            if ((ref === null || ref === void 0 ? void 0 : ref.current) && !(ref === null || ref === void 0 ? void 0 : ref.current.contains(event.target))) {
                onClickOutside();
            }
        };
        var handleMenuKeys = function (event) {
            var _a;
            if (ref === null || ref === void 0 ? void 0 : ref.current) {
                if ((event === null || event === void 0 ? void 0 : event.key) === ESCAPE) {
                    onClickOutside();
                }
                if (!((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(event === null || event === void 0 ? void 0 : event.target)) && (event === null || event === void 0 ? void 0 : event.key) === TAB) {
                    onClickOutside();
                }
            }
        };
        window === null || window === void 0 ? void 0 : window.addEventListener(KEYDOWN, handleMenuKeys);
        document.addEventListener(CLICK, handleClickOutside);
        return function () {
            window === null || window === void 0 ? void 0 : window.removeEventListener(KEYDOWN, handleMenuKeys);
            document.removeEventListener(CLICK, handleClickOutside);
        };
    }, [ref, onClickOutside]);
};
//# sourceMappingURL=useClickOutside.js.map