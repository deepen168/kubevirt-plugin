var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getI18n, useTranslation } from 'react-i18next';
/**
 * A Hook for using the i18n translation.
 */
export var useKubevirtTranslation = function () { return useTranslation('plugin__kubevirt-plugin'); };
/**
 * a function to perform translation to 'plugin__kubevirt-plugin' namespace
 * @param value string to translate
 * @param options (optional) options for traslations
 */
// skipcq: JS-C1002
export var t = function (value, options) {
    return getI18n().t(value, __assign({ ns: 'plugin__kubevirt-plugin' }, options));
};
//# sourceMappingURL=useKubevirtTranslation.js.map