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
import { useMemo } from 'react';
import { ALERT_NAME_LABEL_KEY, SILENCES_URL, URL_POLL_DEFAULT_DELAY, } from '@kubevirt-utils/hooks/useSilences/utils/constants';
import { useURLPoll } from '@openshift-console/dynamic-plugin-sdk-internal';
var useSilences = function () {
    var _a = useURLPoll(SILENCES_URL, URL_POLL_DEFAULT_DELAY), response = _a[0], loadError = _a[1], loading = _a[2];
    var silencesWithAlertName = useMemo(function () {
        return response === null || response === void 0 ? void 0 : response.map(function (silence) {
            var _a, _b;
            var alertName = (_b = (_a = silence === null || silence === void 0 ? void 0 : silence.matchers) === null || _a === void 0 ? void 0 : _a.find(function (matcher) { return (matcher === null || matcher === void 0 ? void 0 : matcher.name) === ALERT_NAME_LABEL_KEY; })) === null || _b === void 0 ? void 0 : _b.value;
            return __assign(__assign({}, silence), { name: alertName ||
                    (silence === null || silence === void 0 ? void 0 : silence.matchers.map(function (matcher) { return "".concat(matcher === null || matcher === void 0 ? void 0 : matcher.name).concat((matcher === null || matcher === void 0 ? void 0 : matcher.isRegex) ? '=~' : '=').concat(matcher === null || matcher === void 0 ? void 0 : matcher.value); }).join(', ')) });
        });
    }, [response]);
    return { loaded: !loading, loadError: loadError, silences: silencesWithAlertName };
};
export default useSilences;
//# sourceMappingURL=useSilences.js.map