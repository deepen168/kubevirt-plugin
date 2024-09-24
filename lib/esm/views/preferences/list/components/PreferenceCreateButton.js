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
import React from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { VirtualMachineClusterPreferenceModelGroupVersionKind, VirtualMachinePreferenceModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageCreate } from '@openshift-console/dynamic-plugin-sdk';
var PreferenceCreateButton = function (_a) {
    var buttonText = _a.buttonText, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var location = useLocation();
    var activeTabKey = (location === null || location === void 0 ? void 0 : location.pathname.includes(VirtualMachineClusterPreferenceModelGroupVersionKind.kind))
        ? 0
        : 1;
    var groupVersionKind = activeTabKey === 0
        ? VirtualMachineClusterPreferenceModelGroupVersionKind
        : VirtualMachinePreferenceModelGroupVersionKind;
    return (React.createElement(ListPageCreate, { createAccessReview: __assign({ groupVersionKind: groupVersionKind }, (activeTabKey !== 0 && { namespace: namespace })), groupVersionKind: groupVersionKind }, buttonText || t('Create')));
};
export default PreferenceCreateButton;
//# sourceMappingURL=PreferenceCreateButton.js.map