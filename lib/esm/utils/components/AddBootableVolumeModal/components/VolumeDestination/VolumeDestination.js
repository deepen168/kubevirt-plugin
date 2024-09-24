import React, { useState } from 'react';
import ApplyStorageProfileSettingsCheckbox from '@kubevirt-utils/components/ApplyStorageProfileSettingsCheckbox/ApplyStorageProfileSettingsCheckbox';
import CapacityInput from '@kubevirt-utils/components/CapacityInput/CapacityInput';
import ProjectDropdown from '@kubevirt-utils/components/ProjectDropdown/ProjectDropdown';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, Grid, GridItem, TextInput } from '@patternfly/react-core';
import DefaultStorageClassAlert from './StorageClass/DefaultStorageClassAlert';
import StorageClassSelect from './StorageClass/StorageClassSelect';
var VolumeDestination = function (_a) {
    var applyStorageProfileState = _a.applyStorageProfileState, bootableVolume = _a.bootableVolume, claimPropertySetsData = _a.claimPropertySetsData, setBootableVolumeField = _a.setBootableVolumeField;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), showSCAlert = _b[0], setShowSCAlert = _b[1];
    var _c = bootableVolume || {}, bootableVolumeName = _c.bootableVolumeName, bootableVolumeNamespace = _c.bootableVolumeNamespace, size = _c.size, storageClassName = _c.storageClassName;
    var applyStorageProfile = applyStorageProfileState[0], setApplyStorageProfile = applyStorageProfileState[1];
    var claimPropertySets = claimPropertySetsData.claimPropertySets, storageProfileLoaded = claimPropertySetsData.loaded;
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { hasGutter: true, span: 12 },
            React.createElement(GridItem, null,
                React.createElement(StorageClassSelect, { setShowSCAlert: setShowSCAlert, setStorageClassName: setBootableVolumeField('storageClassName'), storageClass: storageClassName })),
            React.createElement(GridItem, null,
                React.createElement(ApplyStorageProfileSettingsCheckbox, { claimPropertySets: claimPropertySets, disabled: !storageProfileLoaded, handleChange: setApplyStorageProfile, isChecked: applyStorageProfile })),
            React.createElement(GridItem, { span: 6 },
                React.createElement(CapacityInput, { label: t('Disk size'), onChange: setBootableVolumeField('size'), size: size })),
            showSCAlert && (React.createElement(GridItem, { span: 12 },
                React.createElement(DefaultStorageClassAlert, null)))),
        React.createElement(FormGroup, { isRequired: true, label: t('Volume name') },
            React.createElement(TextInput, { id: "name", onChange: function (_, value) { return setBootableVolumeField('bootableVolumeName')(value); }, type: "text", value: bootableVolumeName })),
        React.createElement(FormGroup, { label: t('Destination project') },
            React.createElement(ProjectDropdown, { includeAllProjects: false, onChange: setBootableVolumeField('bootableVolumeNamespace'), selectedProject: bootableVolumeNamespace }))));
};
export default VolumeDestination;
//# sourceMappingURL=VolumeDestination.js.map