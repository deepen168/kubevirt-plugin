import React from 'react';
import { modelToGroupVersionKind, NamespaceModel, NodeModel, PodModel, VirtualMachineInstanceModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import OwnerDetailsItem from '@kubevirt-utils/components/OwnerDetailsItem/OwnerDetailsItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import { ResourceLink, useAccessReview, } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardTitle, DescriptionList, Divider } from '@patternfly/react-core';
import './virtual-machines-overview-tab-general.scss';
var VirtualMachinesOverviewTabGeneral = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var pods = _a.pods, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var canGetNode = useAccessReview({
        namespace: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        resource: NodeModel.plural,
        verb: 'get',
    })[0];
    var pod = getVMIPod(vmi, pods);
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabGeneral--main" },
        React.createElement(Card, null,
            React.createElement(CardTitle, { className: "text-muted" }, t('General')),
            React.createElement(Divider, null),
            React.createElement(CardBody, { isFilled: true },
                React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. '), descriptionData: React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NamespaceModel), name: (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace }), breadcrumb: "VirtualMachine.metadata.namespace", descriptionHeader: t('Namespace'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/namespaces" }),
                    canGetNode && (React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_d = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _d === void 0 ? void 0 : _d.nodeName) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), name: (_e = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _e === void 0 ? void 0 : _e.nodeName })) : (NO_DATA_DASH), descriptionHeader: t('Node') })),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_f = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _f === void 0 ? void 0 : _f.name) ? (React.createElement(ResourceLink, { groupVersionKind: VirtualMachineInstanceModelGroupVersionKind, name: (_g = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _g === void 0 ? void 0 : _g.name, namespace: (_h = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _h === void 0 ? void 0 : _h.namespace })) : (NO_DATA_DASH), descriptionHeader: t('VirtualMachineInstance') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_j = pod === null || pod === void 0 ? void 0 : pod.metadata) === null || _j === void 0 ? void 0 : _j.name) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(PodModel), name: getName(pod), namespace: getNamespace(pod) })) : (NO_DATA_DASH), descriptionHeader: t('Pod') }),
                    React.createElement(OwnerDetailsItem, { obj: vm }))))));
};
export default VirtualMachinesOverviewTabGeneral;
//# sourceMappingURL=VirtualMachinesOverviewTabGeneral.js.map