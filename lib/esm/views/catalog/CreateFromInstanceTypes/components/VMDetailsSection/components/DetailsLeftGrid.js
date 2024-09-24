import React, { useMemo } from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { instanceTypeActionType, } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { convertResourceArrayToMap } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { DescriptionList, TextInput } from '@patternfly/react-core';
import { getCPUAndMemoryFromDefaultInstanceType, getOSFromDefaultPreference } from '../utils/utils';
var DetailsLeftGrid = function (_a) {
    var instanceTypesAndPreferencesData = _a.instanceTypesAndPreferencesData;
    var t = useKubevirtTranslation().t;
    var _b = useInstanceTypeVMStore(), instanceTypeVMState = _b.instanceTypeVMState, setInstanceTypeVMState = _b.setInstanceTypeVMState;
    var selectedBootableVolume = instanceTypeVMState.selectedBootableVolume, selectedInstanceType = instanceTypeVMState.selectedInstanceType, vmName = instanceTypeVMState.vmName;
    var clusterInstanceTypes = instanceTypesAndPreferencesData.clusterInstanceTypes, preferences = instanceTypesAndPreferencesData.preferences;
    var preferencesMap = useMemo(function () { return convertResourceArrayToMap(preferences); }, [preferences]);
    var instanceTypesMap = useMemo(function () { return convertResourceArrayToMap(clusterInstanceTypes); }, [clusterInstanceTypes]);
    var operatingSystem = getOSFromDefaultPreference(selectedBootableVolume, preferencesMap);
    var cpuMemoryString = !isEmpty(instanceTypesMap === null || instanceTypesMap === void 0 ? void 0 : instanceTypesMap[selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name])
        ? getCPUAndMemoryFromDefaultInstanceType(instanceTypesMap[selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name])
        : null;
    return (React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(TextInput, { onChange: function (_event, newVMName) {
                    return setInstanceTypeVMState({ payload: newVMName, type: instanceTypeActionType.setVMName });
                }, "aria-label": "instancetypes virtualmachine name", "data-test-id": "instancetypes-vm-name-input", isRequired: true, name: "vmname", type: "text", value: vmName }), descriptionHeader: t('Name') }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: operatingSystem, descriptionHeader: t('Operating system') }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name, descriptionHeader: t('InstanceType') }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: cpuMemoryString, descriptionHeader: t('CPU | Memory') })));
};
export default DetailsLeftGrid;
//# sourceMappingURL=DetailsLeftGrid.js.map