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
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { LOAD_BALANCER_ENABLED, NODE_PORT_ENABLED, } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useMetalLBOperatorInstalled } from '@kubevirt-utils/hooks/useMetalLBOperatorInstalled/useMetalLBOperatorInstalled';
import { SelectList, SelectOption } from '@patternfly/react-core';
import { SERVICE_TYPES, serviceTypeTitles } from '../constants';
var SSHServiceSelect = function (_a) {
    var _b, _c;
    var onSSHChange = _a.onSSHChange, sshService = _a.sshService, sshServiceLoaded = _a.sshServiceLoaded;
    var t = useKubevirtTranslation().t;
    var hasMetalLBInstalled = useMetalLBOperatorInstalled();
    var loadBalancerConfigFlag = useFeatures(LOAD_BALANCER_ENABLED).featureEnabled;
    var nodePortEnabled = useFeatures(NODE_PORT_ENABLED).featureEnabled;
    var loadBalancerEnabled = loadBalancerConfigFlag || hasMetalLBInstalled;
    var sshServiceType = (_c = (_b = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _b === void 0 ? void 0 : _b.type) !== null && _c !== void 0 ? _c : SERVICE_TYPES.NONE;
    var handleChange = function (_, newValue) {
        if (newValue === sshServiceType)
            return;
        onSSHChange(newValue);
    };
    return (React.createElement(FormPFSelect, { onSelect: handleChange, selected: sshServiceType, selectedLabel: serviceTypeTitles[sshServiceType], toggleProps: { isDisabled: !sshServiceLoaded, isFullWidth: true } },
        React.createElement(SelectList, null,
            React.createElement(SelectOption, { id: SERVICE_TYPES.NONE, value: SERVICE_TYPES.NONE }, serviceTypeTitles.None),
            React.createElement(SelectOption, { description: t('Assigns an external IP address to the VirtualMachine. This option requires a LoadBalancer Service backend'), id: SERVICE_TYPES.LOAD_BALANCER, isDisabled: !loadBalancerEnabled, value: SERVICE_TYPES.LOAD_BALANCER }, serviceTypeTitles.LoadBalancer),
            React.createElement(SelectOption, __assign({ description: t('Opens a specific port on all Nodes in the cluster. If the Node is publicly accessible, any traffic sent to this port is forwarded to the Service.'), id: SERVICE_TYPES.NODE_PORT, isAriaDisabled: !nodePortEnabled, value: SERVICE_TYPES.NODE_PORT }, (!nodePortEnabled && {
                tooltipProps: {
                    content: t('NodePort service is disabled. Ask your cluster admin to enable it in cluster settings.'),
                },
            })), serviceTypeTitles.NodePort))));
};
export default SSHServiceSelect;
//# sourceMappingURL=SSHServiceSelect.js.map