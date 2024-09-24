import React, { useMemo } from 'react';
import produce from 'immer';
import { NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getNodeSelector } from '@kubevirt-utils/resources/vm';
import { ensurePath, isEmpty } from '@kubevirt-utils/utils/utils';
import { Form } from '@patternfly/react-core';
import LabelsList from './components/LabelList';
import LabelRow from './components/LabelRow';
import NodeCheckerAlert from './components/NodeCheckerAlert';
import { useIDEntities } from './hooks/useIDEntities';
import { useNodeLabelQualifier } from './hooks/useNodeLabelQualifier';
import { isEqualObject, nodeSelectorToIDLabels } from './utils/helpers';
var NodeSelectorModal = function (_a) {
    var isOpen = _a.isOpen, nodes = _a.nodes, nodesLoaded = _a.nodesLoaded, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _b = useIDEntities(nodeSelectorToIDLabels(getNodeSelector(vm))), selectorLabels = _b.entities, onLabelAdd = _b.onEntityAdd, onLabelChange = _b.onEntityChange, onLabelDelete = _b.onEntityDelete;
    var qualifiedNodes = useNodeLabelQualifier(nodes, nodesLoaded, selectorLabels);
    var onSelectorLabelAdd = function () { return onLabelAdd({ id: null, key: '', value: '' }); };
    var updatedVirtualMachine = useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, ['spec.template.template.spec.nodeSelector']);
            if (!vmDraft.spec.template.spec.nodeSelector) {
                vmDraft.spec.template.spec.nodeSelector = {};
            }
            var k8sSelector = selectorLabels.reduce(function (acc, _a) {
                var key = _a.key, value = _a.value;
                acc[key] = value;
                return acc;
            }, {});
            if (!isEqualObject(getNodeSelector(vmDraft), k8sSelector)) {
                vmDraft.spec.template.spec.nodeSelector = k8sSelector;
            }
        });
        return updatedVM;
    }, [vm, selectorLabels]);
    return (React.createElement(TabModal, { headerText: t('Node selector'), isOpen: isOpen, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(LabelsList, { isEmpty: (selectorLabels === null || selectorLabels === void 0 ? void 0 : selectorLabels.length) === 0, model: !isEmpty(nodes) && NodeModel, onLabelAdd: onSelectorLabelAdd }, selectorLabels.length > 0 && (React.createElement(React.Fragment, null, selectorLabels.map(function (label) { return (React.createElement(LabelRow, { key: label.id, label: label, onChange: onLabelChange, onDelete: onLabelDelete })); })))),
            !isEmpty(nodes) && (React.createElement(NodeCheckerAlert, { nodesLoaded: nodesLoaded, qualifiedNodes: (selectorLabels === null || selectorLabels === void 0 ? void 0 : selectorLabels.length) === 0 ? nodes : qualifiedNodes })))));
};
export default NodeSelectorModal;
//# sourceMappingURL=NodeSelectorModal.js.map