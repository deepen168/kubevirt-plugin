import React, { useMemo } from 'react';
import { modelToGroupVersionKind, NodeModel, TemplateModel, VirtualMachineModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import { NetworkAttachmentDefinitionModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/NetworkAttachmentDefinitionModel';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { TEMPLATE_TYPE_LABEL } from '@kubevirt-utils/resources/template';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
var useResourcesQuantities = function () {
    var activeNamespace = useActiveNamespace()[0];
    var namespace = React.useMemo(function () { return (activeNamespace === ALL_NAMESPACES_SESSION_KEY ? null : activeNamespace); }, [activeNamespace]);
    var watchedResources = {
        nads: {
            groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
            isList: true,
            namespace: namespace,
            namespaced: !!namespace,
        },
        nodes: {
            groupVersionKind: modelToGroupVersionKind(NodeModel),
            isList: true,
            namespaced: false,
        },
        vms: {
            groupVersionKind: VirtualMachineModelGroupVersionKind,
            isList: true,
            namespace: namespace,
            namespaced: !!namespace,
        },
        vmTemplates: {
            groupVersionKind: modelToGroupVersionKind(TemplateModel),
            isList: true,
            namespace: namespace,
            namespaced: !!namespace,
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
    var resources = useK8sWatchResources(watchedResources);
    return useMemo(function () {
        return Object.entries(resources).reduce(function (acc, _a) {
            var _b;
            var key = _a[0], value = _a[1];
            acc[key] = (_b = value === null || value === void 0 ? void 0 : value.data) === null || _b === void 0 ? void 0 : _b.length;
            acc.loaded = acc.loaded && (value === null || value === void 0 ? void 0 : value.loaded);
            return acc;
        }, { loaded: false, nads: 0, nodes: 0, vms: 0, vmTemplates: 0 });
    }, [resources]);
};
export default useResourcesQuantities;
//# sourceMappingURL=useResourcesQuantities.js.map