import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import CheckupsNetworkList from './network/list/CheckupsNetworkList';
import CheckupsStorageList from './storage/list/CheckupsStorageList';
import { trimLastHistoryPath } from './utils/utils';
import CheckupsRunButton from './CheckupsRunButton';
import './checkups.scss';
var CheckupsList = function () {
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var location = useLocation();
    var _a = useState((location === null || location === void 0 ? void 0 : location.pathname.endsWith('storage')) ? 1 : 0), activeTabKey = _a[0], setActiveTabKey = _a[1];
    useEffect(function () {
        navigate(createURL(activeTabKey === 0 ? 'network' : 'storage', trimLastHistoryPath(location.pathname)));
    }, [activeTabKey, location.pathname, navigate]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('Checkups') },
            React.createElement(CheckupsRunButton, null)),
        React.createElement(Tabs, { onSelect: function (_, tabIndex) {
                setActiveTabKey(tabIndex);
            }, activeKey: activeTabKey },
            React.createElement(Tab, { eventKey: 0, title: React.createElement(TabTitleText, null, t('Network latency')) },
                React.createElement(CheckupsNetworkList, null)),
            React.createElement(Tab, { eventKey: 1, title: React.createElement(TabTitleText, null, t('Storage')) },
                React.createElement(CheckupsStorageList, null)))));
};
export default CheckupsList;
//# sourceMappingURL=Checkups.js.map