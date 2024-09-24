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
import * as React from 'react';
import produce from 'immer';
import { NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import { K8sIoApiCoreV1TolerationEffectEnum, K8sIoApiCoreV1TolerationOperatorEnum, } from '@kubevirt-ui/kubevirt-api/kubevirt';
import LabelsList from '@kubevirt-utils/components/NodeSelectorModal/components/LabelList';
import NodeCheckerAlert from '@kubevirt-utils/components/NodeSelectorModal/components/NodeCheckerAlert';
import { useIDEntities } from '@kubevirt-utils/components/NodeSelectorModal/hooks/useIDEntities';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTolerations } from '@kubevirt-utils/resources/vm';
import { ensurePath, isEmpty } from '@kubevirt-utils/utils/utils';
import { Form, ModalVariant, Stack, StackItem } from '@patternfly/react-core';
import { getNodeTaintQualifier } from './utils/helpers';
import TolerationEditRow from './TolerationEditRow';
import TolerationListHeaders from './TolerationListHeaders';
import TolerationModalDescriptionText from './TolerationModalDescriptionText';
var TolerationsModal = function (_a) {
    var isOpen = _a.isOpen, nodes = _a.nodes, nodesLoaded = _a.nodesLoaded, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useIDEntities((getTolerations(vm) || []).map(function (toleration, id) { return (__assign(__assign({}, toleration), { id: id })); })), tolerationsLabels = _b.entities, onTolerationAdd = _b.onEntityAdd, onTolerationChange = _b.onEntityChange, onTolerationDelete = _b.onEntityDelete;
    var tolerationLabelsEmpty = (tolerationsLabels === null || tolerationsLabels === void 0 ? void 0 : tolerationsLabels.length) === 0;
    var qualifiedNodes = getNodeTaintQualifier(nodes, nodesLoaded, tolerationsLabels);
    var onSelectorLabelAdd = function () {
        return onTolerationAdd({
            effect: K8sIoApiCoreV1TolerationEffectEnum.NoSchedule,
            id: null,
            key: '',
            value: '',
        });
    };
    var updatedVirtualMachine = React.useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            ensurePath(vmDraft, ['spec.template.template.spec.tolerations']);
            var updatedTolerations = (tolerationsLabels || []).map(function (toleration) {
                return __assign(__assign({}, toleration), { operator: (toleration === null || toleration === void 0 ? void 0 : toleration.value)
                        ? K8sIoApiCoreV1TolerationOperatorEnum.Equal
                        : K8sIoApiCoreV1TolerationOperatorEnum.Exists });
            });
            vmDraft.spec.template.spec.tolerations = updatedTolerations;
        });
        return updatedVM;
    }, [tolerationsLabels, vm]);
    return (React.createElement(TabModal, { headerText: t('Tolerations'), isOpen: isOpen, modalVariant: ModalVariant.medium, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null, vmi && React.createElement(ModalPendingChangesAlert, null)),
            React.createElement(StackItem, null,
                React.createElement(TolerationModalDescriptionText, null)),
            React.createElement(StackItem, null,
                React.createElement(Form, null,
                    React.createElement(LabelsList, { addRowText: t('Add toleration'), emptyStateAddRowText: t('Add toleration to specify qualifying Nodes'), isEmpty: tolerationLabelsEmpty, model: !isEmpty(nodes) && NodeModel, onLabelAdd: onSelectorLabelAdd }, !tolerationLabelsEmpty && (React.createElement(React.Fragment, null,
                        React.createElement(TolerationListHeaders, null),
                        tolerationsLabels.map(function (label) { return (React.createElement(TolerationEditRow, { key: label.id, label: label, onChange: onTolerationChange, onDelete: onTolerationDelete })); })))),
                    !tolerationLabelsEmpty && nodesLoaded && (React.createElement(NodeCheckerAlert, { nodesLoaded: nodesLoaded, qualifiedNodes: (tolerationsLabels === null || tolerationsLabels === void 0 ? void 0 : tolerationsLabels.length) === 0 ? nodes : qualifiedNodes })))))));
};
export default TolerationsModal;
//# sourceMappingURL=TolerationsModal.js.map