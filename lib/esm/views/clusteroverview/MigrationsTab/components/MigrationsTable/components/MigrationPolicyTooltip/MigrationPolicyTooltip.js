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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo } from 'react';
import { MigrationPolicyModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Tooltip } from '@patternfly/react-core';
import { migrationsConfigTooltipFields } from './utils';
var MigrationPolicyTooltip = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var obj = _a.obj;
    var t = useKubevirtTranslation().t;
    var _h = useMemo(function () {
        var _a;
        var mpSpec = (_a = obj === null || obj === void 0 ? void 0 : obj.mpObj) === null || _a === void 0 ? void 0 : _a.spec;
        var defaultConfigurations = obj === null || obj === void 0 ? void 0 : obj.migrationsDefaultConfigurations;
        return migrationsConfigTooltipFields.reduce(function (acc, _a) {
            var field = _a.field, getDisplayText = _a.getDisplayText, label = _a.label;
            if ((mpSpec === null || mpSpec === void 0 ? void 0 : mpSpec[field]) !== undefined) {
                return __assign(__assign({}, acc), { mpConfig: __spreadArray(__spreadArray([], acc.mpConfig, true), [{ label: label, value: getDisplayText(mpSpec === null || mpSpec === void 0 ? void 0 : mpSpec[field]) }], false) });
            }
            if ((defaultConfigurations === null || defaultConfigurations === void 0 ? void 0 : defaultConfigurations[field]) !== undefined) {
                return __assign(__assign({}, acc), { defaultConfig: __spreadArray(__spreadArray([], acc.defaultConfig, true), [
                        { label: label, value: getDisplayText(defaultConfigurations === null || defaultConfigurations === void 0 ? void 0 : defaultConfigurations[field]) },
                    ], false) });
            }
            return acc;
        }, {
            defaultConfig: [],
            mpConfig: [],
        });
    }, [obj]), defaultConfig = _h.defaultConfig, mpConfig = _h.mpConfig;
    return (React.createElement(Tooltip, { content: React.createElement(React.Fragment, null,
            !isEmpty(mpConfig) && (React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement("b", null, t('MigrationPolicy values'))),
                mpConfig.map(function (_a) {
                    var label = _a.label, value = _a.value;
                    return (React.createElement("div", { key: value },
                        label,
                        ": ",
                        value));
                }))),
            !isEmpty(defaultConfig) && (React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement("b", null, t('Default values'))),
                defaultConfig.map(function (_a) {
                    var label = _a.label, value = _a.value;
                    return (React.createElement("div", { key: value },
                        label,
                        ": ",
                        value));
                })))) }, ((_d = (_c = (_b = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.migrationState) === null || _d === void 0 ? void 0 : _d.migrationPolicyName) ? (React.createElement(ResourceLink, { groupVersionKind: MigrationPolicyModelGroupVersionKind, name: (_g = (_f = (_e = obj === null || obj === void 0 ? void 0 : obj.vmiObj) === null || _e === void 0 ? void 0 : _e.status) === null || _f === void 0 ? void 0 : _f.migrationState) === null || _g === void 0 ? void 0 : _g.migrationPolicyName })) : (React.createElement(MutedTextSpan, { text: t('No MigrationPolicy') }))));
};
export default MigrationPolicyTooltip;
//# sourceMappingURL=MigrationPolicyTooltip.js.map