var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { modelToGroupVersionKind, NodeModel, TemplateModel, } from '@kubevirt-ui/kubevirt-api/console';
import NetworkAttachmentDefinitionModel, { NetworkAttachmentDefinitionModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import VirtualMachineModel, { VirtualMachineModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getAllowedResources, getAllowedTemplateResources } from '@kubevirt-utils/resources/shared';
import { TEMPLATE_TYPE_LABEL } from '@kubevirt-utils/resources/template';
import { useProjectNames } from './useProjectNames';
var useNonAdminResourcesInventoryCard = function () {
    var projectNames = useProjectNames();
    var allowedVMResources = getAllowedResources(projectNames, VirtualMachineModel);
    var allowedNADResources = getAllowedResources(projectNames, NetworkAttachmentDefinitionModel);
    var allowedTemplateResources = getAllowedTemplateResources(projectNames);
    var watchedResources = __assign(__assign(__assign(__assign({}, allowedVMResources), allowedTemplateResources), { nodes: {
            groupVersionKind: modelToGroupVersionKind(NodeModel),
            isList: true,
            namespaced: false,
        } }), allowedNADResources);
    return watchedResources;
};
var useAdminResourcesInventoryCard = function () {
    return {
        nads: {
            groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
            isList: true,
            namespaced: false,
        },
        nodes: {
            groupVersionKind: modelToGroupVersionKind(NodeModel),
            isList: true,
            namespaced: false,
        },
        vms: {
            groupVersionKind: VirtualMachineModelGroupVersionKind,
            isList: true,
            namespaced: true,
        },
        vmTemplates: {
            groupVersionKind: modelToGroupVersionKind(TemplateModel),
            isList: true,
            selector: {
                matchExpressions: [
                    {
                        key: TEMPLATE_TYPE_LABEL,
                        operator: 'Exists',
                    },
                ],
            },
        },
    };
};
export var useWatchedResourcesHook = function (isAdmin) {
    return isAdmin ? useAdminResourcesInventoryCard : useNonAdminResourcesInventoryCard;
};
//# sourceMappingURL=useWatchedResourcesInventoryCard.js.map