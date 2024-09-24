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
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { instanceTypeActionType } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { useIsWindowsBootableVolume } from '@catalog/CreateFromInstanceTypes/utils/utils';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SSHSecretModal from '@kubevirt-utils/components/SSHSecretModal/SSHSecretModal';
import { initialSysprepData } from '@kubevirt-utils/components/SSHSecretModal/utils/constants';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import useDefaultStorageClass from '@kubevirt-utils/hooks/useDefaultStorage/useDefaultStorageClass';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { DescriptionList } from '@patternfly/react-core';
import DiskSize from './DiskSize';
import DynamicSSHKeyInjectionInstanceType from './DynamicSSHKeyInjectionInstanceType';
import SysprepDescriptionItem from './SysprepDescriptionItem';
import './details-right-grid.scss';
var DetailsRightGrid = function () {
    var _a;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useDefaultStorageClass(), _c = _b[0], clusterDefaultStorageClass = _c.clusterDefaultStorageClass, sortedStorageClasses = _c.sortedStorageClasses, virtDefaultStorageClass = _c.virtDefaultStorageClass, loaded = _b[1];
    var isWindowsOSVolume = useIsWindowsBootableVolume();
    var _d = useInstanceTypeVMStore(), instanceTypeVMState = _d.instanceTypeVMState, isChangingNamespace = _d.isChangingNamespace, setInstanceTypeVMState = _d.setInstanceTypeVMState, setSelectedStorageClass = _d.setSelectedStorageClass, vmNamespaceTarget = _d.vmNamespaceTarget;
    var pvcSource = instanceTypeVMState.pvcSource, sshSecretCredentials = instanceTypeVMState.sshSecretCredentials;
    var setSSHCredentials = function (credentials) {
        setInstanceTypeVMState({
            payload: __assign(__assign({}, credentials), { appliedDefaultKey: sshSecretCredentials === null || sshSecretCredentials === void 0 ? void 0 : sshSecretCredentials.appliedDefaultKey }),
            type: instanceTypeActionType.setSSHCredentials,
        });
        setInstanceTypeVMState({
            payload: initialSysprepData,
            type: instanceTypeActionType.setSysprepConfigMapData,
        });
        return Promise.resolve();
    };
    return (React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: isChangingNamespace ? React.createElement(Loading, null) : vmNamespaceTarget, descriptionHeader: t('Project') }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(DiskSize, null), descriptionHeader: t('Disk size') }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: loaded ? (React.createElement(InlineFilterSelect, { selected: instanceTypeVMState.selectedStorageClass ||
                    ((_a = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _a === void 0 ? void 0 : _a.storageClassName) ||
                    getName(virtDefaultStorageClass) ||
                    getName(clusterDefaultStorageClass), className: "storageclass-select__dropdown", options: sortedStorageClasses === null || sortedStorageClasses === void 0 ? void 0 : sortedStorageClasses.map(function (scName) { return ({ children: scName, value: scName }); }), setSelected: setSelectedStorageClass, toggleProps: { placeholder: t('Select StorageClass') } })) : (React.createElement(Loading, null)), descriptionHeader: t('Storage class') }),
        isWindowsOSVolume ? (React.createElement(SysprepDescriptionItem, null)) : (React.createElement(React.Fragment, null,
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: isChangingNamespace ? (React.createElement(Loading, null)) : ((sshSecretCredentials === null || sshSecretCredentials === void 0 ? void 0 : sshSecretCredentials.sshSecretName) || t('Not configured')), onEditClick: function () {
                    return createModal(function (modalProps) { return (React.createElement(SSHSecretModal, __assign({}, modalProps, { initialSSHSecretDetails: sshSecretCredentials, namespace: vmNamespaceTarget, onSubmit: setSSHCredentials }))); });
                }, descriptionHeader: React.createElement("span", { id: "tour-step-ssh" }, t('Public SSH key')), isEdit: !isChangingNamespace }),
            React.createElement(DynamicSSHKeyInjectionInstanceType, null)))));
};
export default DetailsRightGrid;
//# sourceMappingURL=DetailsRightGrid.js.map