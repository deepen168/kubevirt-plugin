import React, { useState } from 'react';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Overview } from '@openshift-console/dynamic-plugin-sdk';
import { Card, Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import ClusterTab from './ClusterTab/ClusterTab';
import UserTab from './UserTab/UserTab';
import './settings-tab.scss';
var SettingsTab = function () {
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var _a = useState(isAdmin ? 0 : 1), activeTab = _a[0], setActiveTab = _a[1];
    return (React.createElement(Overview, null,
        React.createElement(Card, { className: "settings-tab__card" },
            React.createElement(Tabs, { activeKey: activeTab, className: "settings-tab__menu", isVertical: true, onSelect: function (_, activeKey) { return setActiveTab(+activeKey); } },
                isAdmin && (React.createElement(Tab, { eventKey: 0, title: React.createElement(TabTitleText, null, t('Cluster')) },
                    React.createElement("div", { className: "settings-tab__content" },
                        React.createElement(ClusterTab, null)))),
                React.createElement(Tab, { eventKey: 1, title: React.createElement(TabTitleText, null, t('User')) },
                    React.createElement("div", { className: "settings-tab__content" },
                        React.createElement(UserTab, null)))))));
};
export default SettingsTab;
//# sourceMappingURL=SettingsTab.js.map