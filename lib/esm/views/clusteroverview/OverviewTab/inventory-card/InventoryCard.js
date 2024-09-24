import * as React from 'react';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAllowedResourceData } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardHeader, CardTitle, Grid, GridItem } from '@patternfly/react-core';
import { useWatchedResourcesHook } from './hooks/useWatchedResourcesInventoryCard';
import ResourcesSection from './utils/ResourcesSection';
import VMStatusSection from './utils/vm-status-section/VMStatusSection';
import './InventoryCard.scss';
var InventoryCard = function () {
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var useWatchedResourcesInventoryCard = useWatchedResourcesHook(isAdmin);
    var watchedResources = useWatchedResourcesInventoryCard();
    var resources = useK8sWatchResources(watchedResources);
    var vms = isAdmin ? resources === null || resources === void 0 ? void 0 : resources.vms : getAllowedResourceData(resources, VirtualMachineModel);
    return (React.createElement(Card, { "data-test-id": "kv-running-inventory-card" },
        React.createElement(CardHeader, null,
            React.createElement(CardTitle, null, t('Inventory'))),
        React.createElement("div", { className: "kv-inventory-card__body" },
            React.createElement(Grid, null,
                React.createElement(GridItem, { span: 4 },
                    React.createElement("div", { className: "kv-inventory-card__item kv-inventory-card__section-header" },
                        React.createElement("div", { className: "kv-inventory-card__item-section kv-inventory-card__item--border-right" },
                            React.createElement("span", { className: "kv-inventory-card__item-text" }, t('Resources'))))),
                React.createElement(GridItem, { span: 8 },
                    React.createElement("div", { className: "kv-inventory-card__item kv-inventory-card__section-header" },
                        React.createElement("div", { className: "kv-inventory-card__item-section" },
                            React.createElement("span", { className: "kv-inventory-card__item-text" }, t('VirtualMachines statuses'))))),
                React.createElement(GridItem, { span: 4 },
                    React.createElement("div", { className: "kv-inventory-card__item" },
                        React.createElement("div", { className: "kv-inventory-card__item-section kv-inventory-card__item--border-right" },
                            React.createElement("span", { className: "kv-inventory-card__item-text" },
                                React.createElement(ResourcesSection, { isAdmin: isAdmin, resources: resources }))))),
                React.createElement(GridItem, { span: 8 },
                    React.createElement(VMStatusSection, { vms: (vms === null || vms === void 0 ? void 0 : vms.data) || [], vmsLoaded: vms === null || vms === void 0 ? void 0 : vms.loaded }))))));
};
export default InventoryCard;
//# sourceMappingURL=InventoryCard.js.map