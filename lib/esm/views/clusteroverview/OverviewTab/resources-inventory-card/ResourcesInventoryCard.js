import React from 'react';
import { NodeModel, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import NetworkAttachmentDefinitionModel from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Card, Grid, GridItem } from '@patternfly/react-core';
import useResourcesQuantities from './hooks/useResourcesQuantities';
import ResourceInventoryItem from './ResourceInventoryItem';
import './ResourcesInventoryCard.scss';
var ResourcesInventoryCard = function () {
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var _a = useResourcesQuantities(), nads = _a.nads, nodes = _a.nodes, vms = _a.vms, vmTemplates = _a.vmTemplates;
    var activeNamespace = useActiveNamespace()[0];
    return (React.createElement("div", { className: "resources-inventory-card", "data-test-id": "resources-inventory-card" },
        React.createElement(Grid, { className: "resources-inventory-card__grid", hasGutter: true },
            React.createElement(GridItem, null,
                React.createElement(Card, { className: "resources-inventory-card__grid-item" },
                    React.createElement(ResourceInventoryItem, { label: t('VirtualMachines'), path: getResourceUrl({ activeNamespace: activeNamespace, model: VirtualMachineModel }), quantity: vms }))),
            React.createElement(GridItem, null,
                React.createElement(Card, { className: "resources-inventory-card__grid-item" },
                    React.createElement(ResourceInventoryItem, { label: t('Templates'), path: getResourceUrl({ activeNamespace: activeNamespace, model: TemplateModel }), quantity: vmTemplates }))),
            isAdmin && (React.createElement(GridItem, null,
                React.createElement(Card, { className: "resources-inventory-card__grid-item" },
                    React.createElement(ResourceInventoryItem, { label: t('Nodes'), path: getResourceUrl({ model: NodeModel }), quantity: nodes })))),
            React.createElement(GridItem, null,
                React.createElement(Card, { className: "resources-inventory-card__grid-item" },
                    React.createElement(ResourceInventoryItem, { label: t('Networks'), path: getResourceUrl({ activeNamespace: activeNamespace, model: NetworkAttachmentDefinitionModel }), quantity: nads }))))));
};
export default ResourcesInventoryCard;
//# sourceMappingURL=ResourcesInventoryCard.js.map