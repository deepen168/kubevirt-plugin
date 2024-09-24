import React from 'react';
import { convertYAMLUserDataObject, getCloudInitData, getCloudInitVolume, } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { DescriptionList, Stack, StackItem } from '@patternfly/react-core';
import VirtualMachineDescriptionItem from '../VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import CloudInitInfoHelper from './CloudinitInfoHelper';
export var CloudInitDescription = function (_a) {
    var _b;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var cloudInitData = getCloudInitData(getCloudInitVolume(vm));
    var userData = convertYAMLUserDataObject(cloudInitData === null || cloudInitData === void 0 ? void 0 : cloudInitData.userData);
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(StackItem, null,
            React.createElement(CloudInitInfoHelper, null)),
        React.createElement(StackItem, null,
            React.createElement(DescriptionList, { className: "pf-c-description-list", columnModifier: { lg: '1Col', xl: '3Col' }, isCompact: true },
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: (userData === null || userData === void 0 ? void 0 : userData.user) || NO_DATA_DASH, descriptionHeader: t('User') }),
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_b = userData === null || userData === void 0 ? void 0 : userData.password) === null || _b === void 0 ? void 0 : _b.toString().replace(/./g, '*')) || NO_DATA_DASH, descriptionHeader: t('Password') }),
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: (cloudInitData === null || cloudInitData === void 0 ? void 0 : cloudInitData.networkData) ? t('Custom') : t('Default'), descriptionHeader: t('Network data') })))));
};
//# sourceMappingURL=CloudInitDescription.js.map