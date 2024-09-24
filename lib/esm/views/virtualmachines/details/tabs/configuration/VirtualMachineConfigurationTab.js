import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useLocation } from 'react-router-dom-v5-compat';
import useInstanceTypesAndPreferences from '@catalog/CreateFromInstanceTypes/state/hooks/useInstanceTypesAndPreferences';
import GuidedTour from '@kubevirt-utils/components/GuidedTour/GuidedTour';
import { runningTourSignal, tourGuideVM, } from '@kubevirt-utils/components/GuidedTour/utils/constants';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { getName } from '@kubevirt-utils/resources/shared';
import useInstanceTypeExpandSpec from '@kubevirt-utils/resources/vm/hooks/useInstanceTypeExpandSpec';
import useVMI from '@kubevirt-utils/resources/vm/hooks/useVMI';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import { getNamespace } from '../../../../cdi-upload-provider/utils/selectors';
import VirtualMachineConfigurationTabSearch from './search/VirtualMachineConfigurationTabSearch';
import { getInnerTabFromPath, includesConfigurationPath, tabs } from './utils/utils';
import './virtual-machine-configuration-tab.scss';
var VirtualMachineConfigurationTab = function (_a) {
    var obj = _a.obj;
    var navigate = useNavigate();
    var location = useLocation();
    var vm = runningTourSignal.value ? tourGuideVM : obj;
    var vmi = useVMI(getName(vm), getNamespace(vm)).vmi;
    var allInstanceTypes = useInstanceTypesAndPreferences().allInstanceTypes;
    var instanceTypeVM = useInstanceTypeExpandSpec(vm)[0];
    var _b = useState(VirtualMachineDetailsTab.Details), activeTabKey = _b[0], setActiveTabKey = _b[1];
    var redirectTab = useCallback(function (name) {
        setActiveTabKey(name);
        var redirectPath = includesConfigurationPath(location.pathname, "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(name));
        navigate(redirectPath);
    }, [location.pathname, navigate]);
    useEffect(function () {
        var innerTab = getInnerTabFromPath(location.pathname);
        innerTab && setActiveTabKey(innerTab);
    }, [location.pathname]);
    return (React.createElement("div", { className: "co-dashboard-body VirtualMachineConfigurationTab" },
        React.createElement(VirtualMachineConfigurationTabSearch, { vm: vm }),
        React.createElement("div", { className: "VirtualMachineConfigurationTab--body" },
            React.createElement(Tabs, { activeKey: activeTabKey, className: "VirtualMachineConfigurationTab--main", isVertical: true }, tabs.map(function (_a) {
                var Component = _a.Component, name = _a.name, title = _a.title;
                return (React.createElement(Tab, { className: "VirtualMachineConfigurationTab--content", eventKey: name, key: name, onClick: function () { return redirectTab(name); }, title: React.createElement(TabTitleText, null, title) }, activeTabKey === name && (React.createElement(Component, { allInstanceTypes: allInstanceTypes, instanceTypeVM: instanceTypeVM, vm: vm, vmi: vmi }))));
            }))),
        React.createElement(GuidedTour, null)));
};
export default VirtualMachineConfigurationTab;
//# sourceMappingURL=VirtualMachineConfigurationTab.js.map