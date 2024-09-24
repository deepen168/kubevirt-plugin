import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import VirtualMachineConfigurationTabSearch from '@virtualmachines/details/tabs/configuration/search/VirtualMachineConfigurationTabSearch';
import { getInnerTabFromPath, includesConfigurationPath, } from '@virtualmachines/details/tabs/configuration/utils/utils';
import { tabs } from './utils/constants';
import './CustomizeInstanceTypeConfigurationTab.scss';
var CustomizeInstanceTypeConfigurationTab = function () {
    var navigate = useNavigate();
    var location = useLocation();
    var _a = useState(VirtualMachineDetailsTab.Details), activeTabKey = _a[0], setActiveTabKey = _a[1];
    var vm = vmSignal.value;
    var redirectTab = useCallback(function (name) {
        setActiveTabKey(name);
        var redirectPath = includesConfigurationPath(location.pathname, "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(name));
        navigate(redirectPath);
    }, [location.pathname, navigate]);
    useEffect(function () {
        var innerTab = getInnerTabFromPath(location.pathname);
        innerTab && setActiveTabKey(innerTab);
    }, [location.pathname]);
    if (!vm) {
        return React.createElement(Loading, null);
    }
    return (React.createElement("div", { className: "co-dashboard-body ConfigurationTab" },
        React.createElement(VirtualMachineConfigurationTabSearch, { vm: vm }),
        React.createElement("div", { className: "ConfigurationTab--body" },
            React.createElement(Tabs, { activeKey: activeTabKey, className: "ConfigurationTab--main", isVertical: true }, tabs.map(function (_a) {
                var Component = _a.Component, name = _a.name, title = _a.title;
                return (React.createElement(Tab, { className: "ConfigurationTab--content", eventKey: name, key: name, onClick: function () { return redirectTab(name); }, title: React.createElement(TabTitleText, null, title) }, activeTabKey === name && React.createElement(Component, null)));
            })))));
};
export default CustomizeInstanceTypeConfigurationTab;
//# sourceMappingURL=CustomizeInstanceTypeConfigurationTab.js.map