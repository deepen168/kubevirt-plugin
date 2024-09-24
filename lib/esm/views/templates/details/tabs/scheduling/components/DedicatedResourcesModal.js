import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import produce from 'immer';
import { isDedicatedCPUPlacement } from 'src/views/templates/utils/utils';
import { cpuManagerLabel, cpuManagerLabelKey, cpuManagerLabelValue, } from '@kubevirt-utils/components/DedicatedResourcesModal/utils/constants';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-utils/models';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { ensurePath, isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, Button, Checkbox, Form, FormGroup, Label, Popover, } from '@patternfly/react-core';
var DedicatedResourcesModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var _b = useState(isDedicatedCPUPlacement(template)), checked = _b[0], setChecked = _b[1];
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _c[0], nodesLoaded = _c[1], loadError = _c[2];
    var _d = useMemo(function () {
        var filteredNodes = nodes === null || nodes === void 0 ? void 0 : nodes.filter(function (node) { var _a, _b; return ((_b = (_a = node === null || node === void 0 ? void 0 : node.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[cpuManagerLabelKey]) === cpuManagerLabelValue; });
        return {
            hasNodes: !!(filteredNodes === null || filteredNodes === void 0 ? void 0 : filteredNodes.length),
            qualifiedNodes: filteredNodes,
        };
    }, [nodes]), hasNodes = _d.hasNodes, qualifiedNodes = _d.qualifiedNodes;
    var updatedTemplate = useMemo(function () {
        return produce(template, function (templateDraft) {
            var draftVM = getTemplateVirtualMachineObject(templateDraft);
            ensurePath(draftVM, ['spec.template.spec.domain.cpu']);
            draftVM.spec.template.spec.domain.cpu.dedicatedCpuPlacement = checked;
        });
    }, [checked, template]);
    return (React.createElement(TabModal, { headerText: t('Dedicated resources'), isOpen: isOpen, obj: updatedTemplate, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: "dedicated-resources", isInline: true },
                React.createElement(Checkbox, { description: React.createElement(React.Fragment, null,
                        t('Available only on Nodes with labels'),
                        ' ',
                        React.createElement(Label, { color: "purple", variant: "filled" }, !isEmpty(nodes) ? (React.createElement(Link, { target: "_blank", to: "/search?kind=".concat(NodeModel.kind, "&q=").concat(encodeURIComponent(cpuManagerLabel)) }, cpuManagerLabel)) : (cpuManagerLabel))), id: "dedicated-resources", isChecked: checked, label: t('Schedule this workload with dedicated resources (guaranteed policy)'), onChange: function (_, check) { return setChecked(check); } })),
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
                })))) : (t('Scheduling will not be possible at this state')))) : (!loadError && !nodesLoaded && React.createElement(Loading, null))))));
};
export default DedicatedResourcesModal;
//# sourceMappingURL=DedicatedResourcesModal.js.map