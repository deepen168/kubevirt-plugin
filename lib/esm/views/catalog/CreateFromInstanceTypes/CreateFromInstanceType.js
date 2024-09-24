import React, { useEffect, useState } from 'react';
import SelectInstanceTypeSection from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/SelectInstanceTypeSection';
import VMDetailsSection from '@catalog/CreateFromInstanceTypes/components/VMDetailsSection/VMDetailsSection';
import GuidedTour from '@kubevirt-utils/components/GuidedTour/GuidedTour';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import useBootableVolumes from '@kubevirt-utils/resources/bootableresources/hooks/useBootableVolumes';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Card, Divider, Grid, GridItem, List } from '@patternfly/react-core';
import AddBootableVolumeButton from './components/AddBootableVolumeButton/AddBootableVolumeButton';
import BootableVolumeList from './components/BootableVolumeList/BootableVolumeList';
import CreateFromInstanceTypeTitle from './components/CreateFromInstanceTypeTitle/CreateFromInstanceTypeTitle';
import CreateVMFooter from './components/CreateVMFooter/CreateVMFooter';
import SectionListItem from './components/SectionListItem/SectionListItem';
import useInstanceTypesAndPreferences from './state/hooks/useInstanceTypesAndPreferences';
import { useInstanceTypeVMStore } from './state/useInstanceTypeVMStore';
import { INSTANCE_TYPES_SECTIONS } from './utils/constants';
import './CreateFromInstanceType.scss';
var CreateFromInstanceType = function (_a) {
    var currentTab = _a.currentTab;
    var t = useKubevirtTranslation().t;
    var sectionState = useState(INSTANCE_TYPES_SECTIONS.SELECT_VOLUME);
    var _b = useInstanceTypeVMStore(), resetInstanceTypeVMState = _b.resetInstanceTypeVMState, setVMNamespaceTarget = _b.setVMNamespaceTarget, volumeListNamespace = _b.volumeListNamespace;
    var bootableVolumesData = useBootableVolumes(volumeListNamespace);
    var instanceTypesAndPreferencesData = useInstanceTypesAndPreferences();
    var activeNamespace = useActiveNamespace()[0];
    var _c = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _c[0], loaded = _c[2];
    useEffect(function () {
        resetInstanceTypeVMState();
    }, [resetInstanceTypeVMState]);
    useEffect(function () {
        var targetNS = activeNamespace === ALL_NAMESPACES_SESSION_KEY ? DEFAULT_NAMESPACE : activeNamespace;
        setVMNamespaceTarget(authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[targetNS], targetNS);
    }, [activeNamespace, authorizedSSHKeys, setVMNamespaceTarget]);
    var _d = useKubevirtUserSettings('favoriteBootableVolumes'), _e = _d[0], favorites = _e === void 0 ? [] : _e, updaterFavorites = _d[1], loadedFavorites = _d[2];
    if (!(bootableVolumesData === null || bootableVolumesData === void 0 ? void 0 : bootableVolumesData.loaded) ||
        !(instanceTypesAndPreferencesData === null || instanceTypesAndPreferencesData === void 0 ? void 0 : instanceTypesAndPreferencesData.loaded) ||
        !loaded ||
        (!loadedFavorites && !favorites)) {
        return (React.createElement(Bullseye, { className: "create-vm-instance-type-section__page-loader" },
            React.createElement(Loading, null)));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(GuidedTour, null),
        React.createElement(Grid, { className: "co-dashboard-body" },
            React.createElement(GridItem, null,
                React.createElement(Card, null,
                    React.createElement(List, { className: "create-vm-instance-type-section__list", isPlain: true },
                        React.createElement(SectionListItem, { headerAction: React.createElement(AddBootableVolumeButton, { loadError: instanceTypesAndPreferencesData.loadError }), headerText: React.createElement(CreateFromInstanceTypeTitle, { instanceTypesAndPreferencesData: instanceTypesAndPreferencesData }), sectionKey: INSTANCE_TYPES_SECTIONS.SELECT_VOLUME, sectionState: sectionState },
                            React.createElement(BootableVolumeList, { bootableVolumesData: bootableVolumesData, currentTab: currentTab, displayShowAllButton: true, favorites: [favorites, updaterFavorites], preferencesData: instanceTypesAndPreferencesData.preferences })),
                        React.createElement(Divider, { className: "create-vm-instance-type-section__divider" }),
                        React.createElement(SectionListItem, { headerText: t('Select InstanceType'), sectionKey: INSTANCE_TYPES_SECTIONS.SELECT_INSTANCE_TYPE, sectionState: sectionState },
                            React.createElement(SelectInstanceTypeSection, { instanceTypesAndPreferencesData: instanceTypesAndPreferencesData })),
                        React.createElement(Divider, { className: "create-vm-instance-type-section__divider" }),
                        React.createElement(SectionListItem, { headerText: t('VirtualMachine details'), sectionKey: INSTANCE_TYPES_SECTIONS.VM_DETAILS, sectionState: sectionState },
                            React.createElement(VMDetailsSection, { instanceTypesAndPreferencesData: instanceTypesAndPreferencesData })))))),
        React.createElement(CreateVMFooter, null)));
};
export default CreateFromInstanceType;
//# sourceMappingURL=CreateFromInstanceType.js.map