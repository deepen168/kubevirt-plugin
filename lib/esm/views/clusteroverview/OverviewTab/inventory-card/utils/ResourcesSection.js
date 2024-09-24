import React, { useMemo } from 'react';
import { NodeModel, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import NetworkAttachmentDefinitionModel from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getAllowedResourceData } from '@kubevirt-utils/resources/shared';
import { ResourceInventoryItem } from '@openshift-console/dynamic-plugin-sdk-internal';
import { Stack, StackItem } from '@patternfly/react-core';
import './ResourcesSection.scss';
var ResourcesSection = function (_a) {
    var _b, _c, _d;
    var isAdmin = _a.isAdmin, resources = _a.resources;
    var templates = useMemo(function () { return (isAdmin ? resources === null || resources === void 0 ? void 0 : resources.vmTemplates : getAllowedResourceData(resources, TemplateModel)); }, [resources, isAdmin]);
    var vms = useMemo(function () { return (isAdmin ? resources === null || resources === void 0 ? void 0 : resources.vms : getAllowedResourceData(resources, VirtualMachineModel)); }, [resources, isAdmin]);
    var nads = useMemo(function () {
        return isAdmin
            ? resources === null || resources === void 0 ? void 0 : resources.nads
            : getAllowedResourceData(resources, NetworkAttachmentDefinitionModel);
    }, [resources, isAdmin]);
    return (React.createElement(Stack, { className: "kv-inventory-card__resources--container", hasGutter: true },
        React.createElement(StackItem, { key: VirtualMachineModel.kind },
            React.createElement(ResourceInventoryItem, { dataTest: "kv-inventory-card--vms", error: !!(vms === null || vms === void 0 ? void 0 : vms.loadError), isLoading: (vms === null || vms === void 0 ? void 0 : vms.loaded) === false, kind: VirtualMachineModel, resources: vms === null || vms === void 0 ? void 0 : vms.data, showLink: isAdmin })),
        React.createElement(StackItem, { key: TemplateModel.kind },
            React.createElement(ResourceInventoryItem, { basePath: "/k8s/all-namespaces/templates", dataTest: "kv-inventory-card--vm-templates", error: !!(templates === null || templates === void 0 ? void 0 : templates.loadError), isLoading: (templates === null || templates === void 0 ? void 0 : templates.loaded) === false, kind: TemplateModel, resources: templates === null || templates === void 0 ? void 0 : templates.data, showLink: isAdmin })),
        React.createElement(StackItem, { key: NodeModel.kind },
            React.createElement(ResourceInventoryItem, { dataTest: "kv-inventory-card--nodes", error: !!((_b = resources === null || resources === void 0 ? void 0 : resources.nodes) === null || _b === void 0 ? void 0 : _b.loadError), isLoading: ((_c = resources === null || resources === void 0 ? void 0 : resources.nodes) === null || _c === void 0 ? void 0 : _c.loaded) === false, kind: NodeModel, resources: (_d = resources === null || resources === void 0 ? void 0 : resources.nodes) === null || _d === void 0 ? void 0 : _d.data, showLink: isAdmin })),
        React.createElement(StackItem, { key: NetworkAttachmentDefinitionModel.kind },
            React.createElement(ResourceInventoryItem, { dataTest: "kv-inventory-card--nads", error: !!(nads === null || nads === void 0 ? void 0 : nads.loadError), isLoading: (nads === null || nads === void 0 ? void 0 : nads.loaded) === false, kind: NetworkAttachmentDefinitionModel, resources: nads === null || nads === void 0 ? void 0 : nads.data, showLink: isAdmin, title: "Network", titlePlural: "Networks" }))));
};
export default ResourcesSection;
//# sourceMappingURL=ResourcesSection.js.map