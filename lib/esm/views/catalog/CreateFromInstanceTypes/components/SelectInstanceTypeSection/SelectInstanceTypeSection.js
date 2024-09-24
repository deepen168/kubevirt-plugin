import React, { useEffect, useMemo, useState } from 'react';
import RedHatProvidedInstanceTypesSection from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/components/RedHatProvidedInstanceTypesSection/RedHatProvidedInstanceTypesSection';
import UserProvidedInstanceTypesList from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/components/UserProvidedInstanceTypeList/UserProvidedInstanceTypeList';
import { getUserProvidedInstanceTypes } from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/components/UserProvidedInstanceTypeList/utils/utils';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { getInstanceTypeMenuItems } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/utils';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { Tab, Tabs } from '@patternfly/react-core';
import { TabKey } from './utils/constants';
var SelectInstanceTypeSection = function (_a) {
    var instanceTypesAndPreferencesData = _a.instanceTypesAndPreferencesData;
    var _b = useState(TabKey.RedHat), activeTabKey = _b[0], setActiveTabKey = _b[1];
    var allInstanceTypes = instanceTypesAndPreferencesData.allInstanceTypes, loaded = instanceTypesAndPreferencesData.loaded;
    var selectedInstanceType = useInstanceTypeVMStore().instanceTypeVMState.selectedInstanceType;
    var menuItems = useMemo(function () { return getInstanceTypeMenuItems(allInstanceTypes); }, [allInstanceTypes]);
    useEffect(function () {
        // This effect is meant to focus the tab an IT was defined as default by the selected volume
        var tabToSwitch = menuItems.userProvided.items.includes(selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name)
            ? TabKey.Users
            : TabKey.RedHat;
        setActiveTabKey(tabToSwitch);
    }, [menuItems.userProvided.items, selectedInstanceType]);
    if (!loaded)
        return React.createElement(Loading, null);
    var handleTabClick = function (_, tabIndex) {
        setActiveTabKey(tabIndex);
    };
    return (React.createElement(Tabs, { activeKey: activeTabKey, onSelect: handleTabClick },
        React.createElement(Tab, { eventKey: TabKey.RedHat, title: menuItems.redHatProvided.label },
            React.createElement(RedHatProvidedInstanceTypesSection, { redHatMenuItems: menuItems === null || menuItems === void 0 ? void 0 : menuItems.redHatProvided })),
        React.createElement(Tab, { eventKey: TabKey.Users, title: menuItems.userProvided.label },
            React.createElement(UserProvidedInstanceTypesList, { userProvidedInstanceTypes: getUserProvidedInstanceTypes(allInstanceTypes) }))));
};
export default SelectInstanceTypeSection;
//# sourceMappingURL=SelectInstanceTypeSection.js.map