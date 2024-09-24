import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import produce from 'immer';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-utils/models';
import { getCPU } from '@kubevirt-utils/resources/vm';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, Button, Checkbox, Form, FormGroup, Label, Popover, } from '@patternfly/react-core';
import { cpuManagerLabel, cpuManagerLabelKey, cpuManagerLabelValue } from './utils/constants';
var DedicatedResourcesModal = function (_a) {
    var _b;
    var headerText = _a.headerText, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _c = useState(!!((_b = getCPU(vm)) === null || _b === void 0 ? void 0 : _b.dedicatedCpuPlacement)), checked = _c[0], setChecked = _c[1];
    var _d = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _d[0], loaded = _d[1], loadError = _d[2];
    var _e = useMemo(function () {
        var filteredNodes = nodes === null || nodes === void 0 ? void 0 : nodes.filter(function (node) { var _a, _b; return ((_b = (_a = node === null || node === void 0 ? void 0 : node.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[cpuManagerLabelKey]) === cpuManagerLabelValue; });
        return {
            hasNodes: !!(filteredNodes === null || filteredNodes === void 0 ? void 0 : filteredNodes.length),
            qualifiedNodes: filteredNodes,
        };
    }, [nodes]), hasNodes = _e.hasNodes, qualifiedNodes = _e.qualifiedNodes;
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, ['spec.template.spec.domain.cpu']);
            vmDraft.spec.template.spec.domain.cpu.dedicatedCpuPlacement = checked;
        });
        return updatedVM;
    }, [vm, checked]);
    return (React.createElement(TabModal, { headerText: headerText, isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            vmi && React.createElement(ModalPendingChangesAlert, null),
            React.createElement(FormGroup, { fieldId: "dedicated-resources", isInline: true },
                React.createElement(Checkbox, { description: React.createElement(React.Fragment, null,
                        t('Available only on Nodes with labels'),
                        ' ',
                        React.createElement(Label, { color: "purple", variant: "filled" }, !isEmpty(nodes) ? (React.createElement(Link, { target: "_blank", to: "/search?kind=".concat(NodeModel.kind, "&q=").concat(encodeURIComponent(cpuManagerLabel)) }, cpuManagerLabel)) : (cpuManagerLabel))), id: "dedicated-resources", isChecked: checked, label: t('Schedule this workload with dedicated resources (guaranteed policy)'), onChange: function (_event, val) { return setChecked(val); } })),
            React.createElement(FormGroup, { fieldId: "dedicated-resources-node" }, !isEmpty(nodes) ? (React.createElement(Alert, { title: hasNodes
                    ? t('{{qualifiedNodesCount}} matching nodes found', {
                        qualifiedNodesCount: qualifiedNodes === null || qualifiedNodes === void 0 ? void 0 : qualifiedNodes.length,
                    })
                    : t('No matching nodes found for the {{cpuManagerLabel}} label', {
                        cpuManagerLabel: cpuManagerLabel,
                    }), isInline: true, variant: hasNodes ? AlertVariant.success : AlertVariant.warning }, hasNodes ? (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null, qualifiedNodes === null || qualifiedNodes === void 0 ? void 0 : qualifiedNodes.map(function (node) { return (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), key: node.metadata.uid, name: node.metadata.name })); })), headerContent: t('{{qualifiedNodesCount}} nodes found', {
                    qualifiedNodesCount: qualifiedNodes === null || qualifiedNodes === void 0 ? void 0 : qualifiedNodes.length,
                }) },
                React.createElement(Button, { isInline: true, onClick: function () { return setChecked(false); }, variant: "link" }, t('view {{qualifiedNodesCount}} matching nodes', {
                    qualifiedNodesCount: qualifiedNodes === null || qualifiedNodes === void 0 ? void 0 : qualifiedNodes.length,
                })))) : (t('Scheduling will not be possible at this state')))) : (!loaded && !loadError && React.createElement(Loading, null))))));
};
export default DedicatedResourcesModal;
//# sourceMappingURL=DedicatedResourcesModal.js.map