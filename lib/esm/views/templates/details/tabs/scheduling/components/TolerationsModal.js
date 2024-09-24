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
import { getTolerations } from 'src/views/templates/utils/selectors';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import { K8sIoApiCoreV1TolerationEffectEnum, K8sIoApiCoreV1TolerationOperatorEnum, } from '@kubevirt-ui/kubevirt-api/kubevirt';
import LabelsList from '@kubevirt-utils/components/NodeSelectorModal/components/LabelList';
import NodeCheckerAlert from '@kubevirt-utils/components/NodeSelectorModal/components/NodeCheckerAlert';
import { useIDEntities } from '@kubevirt-utils/components/NodeSelectorModal/hooks/useIDEntities';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import TolerationEditRow from '@kubevirt-utils/components/TolerationsModal/TolerationEditRow';
import TolerationListHeaders from '@kubevirt-utils/components/TolerationsModal/TolerationListHeaders';
import TolerationModalDescriptionText from '@kubevirt-utils/components/TolerationsModal/TolerationModalDescriptionText';
import { getNodeTaintQualifier } from '@kubevirt-utils/components/TolerationsModal/utils/helpers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Form, ModalVariant } from '@patternfly/react-core';
var TolerationsModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var _b = useIDEntities((getTolerations(template) || []).map(function (toleration, id) { return (__assign(__assign({}, toleration), { id: id })); })), tolerationsLabels = _b.entities, onTolerationAdd = _b.onEntityAdd, onTolerationChange = _b.onEntityChange, onTolerationDelete = _b.onEntityDelete;
    var tolerationLabelsEmpty = (tolerationsLabels === null || tolerationsLabels === void 0 ? void 0 : tolerationsLabels.length) === 0;
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _c[0], nodesLoaded = _c[1];
    var qualifiedNodes = getNodeTaintQualifier(nodes, nodesLoaded, tolerationsLabels);
    var onSelectorLabelAdd = function () {
        return onTolerationAdd({
            effect: K8sIoApiCoreV1TolerationEffectEnum.NoSchedule,
            id: null,
            key: '',
            value: '',
        });
    };
    var updatedTemplate = React.useMemo(function () {
        return produce(template, function (templateDraft) {
            var updatedTolerations = (tolerationsLabels || []).map(function (toleration) {
                return __assign(__assign({}, toleration), { operator: (toleration === null || toleration === void 0 ? void 0 : toleration.value)
                        ? K8sIoApiCoreV1TolerationOperatorEnum.Equal
                        : K8sIoApiCoreV1TolerationOperatorEnum.Exists });
            });
            getTemplateVirtualMachineObject(templateDraft).spec.template.spec.tolerations =
                updatedTolerations;
        });
    }, [template, tolerationsLabels]);
    return (React.createElement(TabModal, { headerText: t('Tolerations'), isOpen: isOpen, modalVariant: ModalVariant.medium, obj: updatedTemplate, onClose: onClose, onSubmit: onSubmit },
        React.createElement(TolerationModalDescriptionText, null),
        React.createElement(Form, null,
            React.createElement(LabelsList, { addRowText: t('Add toleration'), emptyStateAddRowText: t('Add toleration to specify qualifying Nodes'), isEmpty: tolerationLabelsEmpty, model: !isEmpty(nodes) && NodeModel, onLabelAdd: onSelectorLabelAdd }, !tolerationLabelsEmpty && (React.createElement(React.Fragment, null,
                React.createElement(TolerationListHeaders, null),
                tolerationsLabels.map(function (label) { return (React.createElement(TolerationEditRow, { key: label.id, label: label, onChange: onTolerationChange, onDelete: onTolerationDelete })); })))),
            !tolerationLabelsEmpty && nodesLoaded && (React.createElement(NodeCheckerAlert, { nodesLoaded: nodesLoaded, qualifiedNodes: (tolerationsLabels === null || tolerationsLabels === void 0 ? void 0 : tolerationsLabels.length) === 0 ? nodes : qualifiedNodes })))));
};
export default TolerationsModal;
//# sourceMappingURL=TolerationsModal.js.map