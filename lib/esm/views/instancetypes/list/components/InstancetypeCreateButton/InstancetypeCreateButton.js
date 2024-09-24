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
import { VirtualMachineInstancetypeModelRef } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineClusterInstancetypeModel, { VirtualMachineClusterInstancetypeModelRef, } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineClusterInstancetypeModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageCreate } from '@openshift-console/dynamic-plugin-sdk';
var InstancetypeCreateButton = function (_a) {
    var buttonText = _a.buttonText, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var location = useLocation();
    var activeTabKey = (location === null || location === void 0 ? void 0 : location.pathname.includes(VirtualMachineClusterInstancetypeModel.kind))
        ? 0
        : 1;
    var groupVersionKind = activeTabKey === 0
        ? VirtualMachineClusterInstancetypeModelRef
        : VirtualMachineInstancetypeModelRef;
    return (React.createElement(ListPageCreate, { createAccessReview: __assign({ groupVersionKind: groupVersionKind }, (activeTabKey !== 0 && { namespace: namespace })), groupVersionKind: groupVersionKind }, buttonText || t('Create')));
};
export default InstancetypeCreateButton;
//# sourceMappingURL=InstancetypeCreateButton.js.map