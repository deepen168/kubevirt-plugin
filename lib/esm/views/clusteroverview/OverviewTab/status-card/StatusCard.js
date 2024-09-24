import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isDashboardsOverviewHealthSubsystem as isDynamicDashboardsOverviewHealthSubsystem, isResolvedDashboardsOverviewHealthURLSubsystem, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { HealthBody } from '@openshift-console/dynamic-plugin-sdk-internal';
import { Card, CardHeader, CardTitle, Gallery, GalleryItem } from '@patternfly/react-core';
import { VIRTUALIZATION } from './utils/constants';
import useDashboardSubsystems from './utils/hooks/useDashboardSubsystems';
import NetworkingHealthItem from './utils/NetworkingHealthItem';
import StorageHealthItem from './utils/storage-health-item/StorageHealthItem';
import URLHealthItem from './utils/URLHealthItem';
import { getClusterNAC, NetworkAddonsConfigResource } from './utils/utils';
import VirtualizationAlerts from './utils/VirtualizationAlerts';
var StatusCard = function () {
    var t = useKubevirtTranslation().t;
    var subsystems = useDashboardSubsystems(isDynamicDashboardsOverviewHealthSubsystem);
    var networkAddonsConfigList = useK8sWatchResource(NetworkAddonsConfigResource)[0];
    var clusterNAC = getClusterNAC(networkAddonsConfigList);
    var virtStatusItems = [];
    subsystems === null || subsystems === void 0 ? void 0 : subsystems.forEach(function (subsystem) {
        var _a;
        if (isResolvedDashboardsOverviewHealthURLSubsystem(subsystem) &&
            ((_a = subsystem === null || subsystem === void 0 ? void 0 : subsystem.properties) === null || _a === void 0 ? void 0 : _a.title) === VIRTUALIZATION) {
            virtStatusItems.push({
                Component: React.createElement(URLHealthItem, { subsystem: subsystem.properties }),
                title: t('Virtualization'),
            });
        }
    });
    virtStatusItems.push({
        Component: React.createElement(NetworkingHealthItem, { nac: clusterNAC }),
        title: t('Networking'),
    });
    virtStatusItems.push({
        Component: React.createElement(StorageHealthItem, null),
        title: t('Storage'),
    });
    return (React.createElement(Card, { className: "co-overview-card--gradient", "data-test-id": "kv-overview-status-card" },
        React.createElement(CardHeader, { actions: {
                actions: React.createElement(Link, { to: "/monitoring/alerts" }, t('View alerts')),
                className: 'co-overview-card__actions',
                hasNoOffset: false,
            } },
            React.createElement(CardTitle, null, t('Status'))),
        React.createElement(HealthBody, null,
            React.createElement(Gallery, { className: "co-overview-status__health", hasGutter: true }, virtStatusItems === null || virtStatusItems === void 0 ? void 0 : virtStatusItems.map(function (item) {
                return React.createElement(GalleryItem, { key: item.title }, item.Component);
            }))),
        React.createElement(VirtualizationAlerts, null)));
};
export default StatusCard;
//# sourceMappingURL=StatusCard.js.map