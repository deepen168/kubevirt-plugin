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
import React, { useState } from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { instanceTypeVMInitialState } from '@catalog/CreateFromInstanceTypes/state/utils/state';
import { instanceTypeActionType, } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { initialSSHCredentials } from '@kubevirt-utils/components/SSHSecretModal/utils/constants';
import useSysprepConfigMaps from '@kubevirt-utils/components/SysprepModal/hooks/useConfigMaps';
import { AUTOUNATTEND, generateSysprepConfigMapName, UNATTEND, } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { SysprepModal } from '@kubevirt-utils/components/SysprepModal/SysprepModal';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ConfigMapModel, modelToGroupVersionKind } from '@kubevirt-utils/models';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Loading } from '@patternfly/quickstarts';
var SysprepDescriptionItem = function () {
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _a = useInstanceTypeVMStore(), instanceTypeVMState = _a.instanceTypeVMState, isChangingNamespace = _a.isChangingNamespace, setInstanceTypeVMState = _a.setInstanceTypeVMState, vmNamespaceTarget = _a.vmNamespaceTarget;
    var sysprepConfigMaps = useSysprepConfigMaps(vmNamespaceTarget)[0];
    var sysprepInitialData = instanceTypeVMInitialState.sysprepConfigMapData;
    var sysprepConfigMapData = instanceTypeVMState.sysprepConfigMapData;
    var _b = sysprepConfigMapData || sysprepInitialData, data = _b.data, currentSysprepName = _b.name, shouldCreateNewConfigMap = _b.shouldCreateNewConfigMap;
    var _c = useState((data === null || data === void 0 ? void 0 : data.autounattend) || ''), autounattend = _c[0], setAutounattend = _c[1];
    var _d = useState((data === null || data === void 0 ? void 0 : data.unattended) || ''), unattended = _d[0], setUnattended = _d[1];
    var setSysprepConfigMapData = function (newConfigMapData) {
        setInstanceTypeVMState({
            payload: newConfigMapData,
            type: instanceTypeActionType.setSysprepConfigMapData,
        });
        setInstanceTypeVMState({
            payload: initialSSHCredentials,
            type: instanceTypeActionType.setSSHCredentials,
        });
    };
    var onSysprepCreation = function (unattend, autoUnattend) {
        if (!unattend && !autoUnattend) {
            setAutounattend('');
            setUnattended('');
            setSysprepConfigMapData(sysprepInitialData);
            return;
        }
        setAutounattend(autoUnattend);
        setUnattended(unattend);
        setSysprepConfigMapData({
            data: {
                autounattend: autoUnattend,
                unattended: unattend,
            },
            name: generateSysprepConfigMapName(),
            shouldCreateNewConfigMap: true,
        });
    };
    var onSysprepSelected = function (name) {
        var _a;
        var dataObj = (_a = sysprepConfigMaps === null || sysprepConfigMaps === void 0 ? void 0 : sysprepConfigMaps.filter(function (configMap) { return configMap.metadata.name === name; })[0]) === null || _a === void 0 ? void 0 : _a.data;
        var _b = dataObj || {}, _c = AUTOUNATTEND, autoUnattend = _b[_c], _d = UNATTEND, unattend = _b[_d];
        setAutounattend(autoUnattend);
        setUnattended(unattend);
        setSysprepConfigMapData({
            data: {
                autounattend: autoUnattend,
                unattended: unattend,
            },
            name: name,
            shouldCreateNewConfigMap: false,
        });
    };
    var sysprepDescription = autounattend || unattended ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(ConfigMapModel), linkTo: false, name: currentSysprepName })) : (t('Not configured'));
    return (React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
            return createModal(function (modalProps) { return (React.createElement(SysprepModal, __assign({}, modalProps, { autoUnattend: autounattend, namespace: vmNamespaceTarget, onSysprepCreation: onSysprepCreation, onSysprepSelected: onSysprepSelected, shouldCreateConfigMap: shouldCreateNewConfigMap, sysprepSelected: currentSysprepName, unattend: unattended }))); });
        }, descriptionData: isChangingNamespace ? React.createElement(Loading, null) : sysprepDescription, descriptionHeader: t('Sysprep'), isEdit: !isChangingNamespace }));
};
export default SysprepDescriptionItem;
//# sourceMappingURL=SysprepDescriptionItem.js.map