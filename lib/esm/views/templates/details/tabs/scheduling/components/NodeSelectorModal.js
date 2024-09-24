import * as React from 'react';
import produce from 'immer';
import { getNodeSelector } from 'src/views/templates/utils/selectors';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import LabelsList from '@kubevirt-utils/components/NodeSelectorModal/components/LabelList';
import LabelRow from '@kubevirt-utils/components/NodeSelectorModal/components/LabelRow';
import NodeCheckerAlert from '@kubevirt-utils/components/NodeSelectorModal/components/NodeCheckerAlert';
import { useIDEntities } from '@kubevirt-utils/components/NodeSelectorModal/hooks/useIDEntities';
import { useNodeLabelQualifier } from '@kubevirt-utils/components/NodeSelectorModal/hooks/useNodeLabelQualifier';
import { isEqualObject, nodeSelectorToIDLabels, } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Form } from '@patternfly/react-core';
var NodeSelectorModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var _b = useIDEntities(nodeSelectorToIDLabels(getNodeSelector(template))), selectorLabels = _b.entities, onLabelAdd = _b.onEntityAdd, onLabelChange = _b.onEntityChange, onLabelDelete = _b.onEntityDelete;
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _c[0], nodesLoaded = _c[1];
    var qualifiedNodes = useNodeLabelQualifier(nodes, nodesLoaded, selectorLabels);
    var onSelectorLabelAdd = function () { return onLabelAdd({ id: null, key: '', value: '' }); };
    var updatedTemplate = React.useMemo(function () {
        return produce(template, function (templateDraft) {
            var draftVM = getTemplateVirtualMachineObject(templateDraft);
            if (!getNodeSelector(templateDraft)) {
                draftVM.spec.template.spec.nodeSelector = {};
            }
            var k8sSelector = selectorLabels.reduce(function (acc, _a) {
                var key = _a.key, value = _a.value;
                acc[key] = value;
                return acc;
            }, {});
            if (!isEqualObject(getNodeSelector(templateDraft), k8sSelector)) {
                draftVM.spec.template.spec.nodeSelector = k8sSelector;
            }
        });
    }, [template, selectorLabels]);
    return (React.createElement(TabModal, { headerText: t('Node selector'), isOpen: isOpen, obj: updatedTemplate, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(LabelsList, { isEmpty: (selectorLabels === null || selectorLabels === void 0 ? void 0 : selectorLabels.length) === 0, model: !isEmpty(nodes) && NodeModel, onLabelAdd: onSelectorLabelAdd }, selectorLabels.length > 0 && (React.createElement(React.Fragment, null, selectorLabels.map(function (label) { return (React.createElement(LabelRow, { key: label.id, label: label, onChange: onLabelChange, onDelete: onLabelDelete })); })))),
            !isEmpty(nodes) && (React.createElement(NodeCheckerAlert, { nodesLoaded: nodesLoaded, qualifiedNodes: (selectorLabels === null || selectorLabels === void 0 ? void 0 : selectorLabels.length) === 0 ? nodes : qualifiedNodes })))));
};
export default NodeSelectorModal;
//# sourceMappingURL=NodeSelectorModal.js.map