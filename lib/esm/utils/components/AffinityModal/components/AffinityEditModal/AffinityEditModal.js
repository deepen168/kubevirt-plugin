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
import React from 'react';
import { useIDEntities } from '@kubevirt-utils/components/NodeSelectorModal/hooks/useIDEntities';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ActionGroup, Button, ButtonVariant, Modal, ModalVariant } from '@patternfly/react-core';
import { getIntersectedQualifiedNodes } from '../../utils/helpers';
import AffinityForm from './AffinityForm/AffinityForm';
import { useNodeFieldQualifier } from './hooks/useNodeFieldQualifier';
import { useNodeLabelQualifier } from './hooks/useNodeLabelQualifier';
var AffinityEditModal = function (_a) {
    var focusedAffinity = _a.focusedAffinity, isOpen = _a.isOpen, nodes = _a.nodes, nodesLoaded = _a.nodesLoaded, onCancel = _a.onCancel, onSubmit = _a.onSubmit, setFocusedAffinity = _a.setFocusedAffinity, title = _a.title;
    var t = useKubevirtTranslation().t;
    var _b = React.useState(false), isDisabled = _b[0], setIsDisabled = _b[1];
    var expressions = useIDEntities(focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.expressions);
    var fields = useIDEntities(focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.fields);
    var qualifiedExpressionNodes = useNodeLabelQualifier(nodes, nodesLoaded, expressions === null || expressions === void 0 ? void 0 : expressions.entities);
    var qualifiedFieldNodes = useNodeFieldQualifier(nodes, nodesLoaded, fields === null || fields === void 0 ? void 0 : fields.entities);
    return (React.createElement(Modal, { footer: React.createElement(ActionGroup, null,
            React.createElement(Button, { onClick: function () {
                    return onSubmit(__assign(__assign({}, focusedAffinity), { expressions: expressions === null || expressions === void 0 ? void 0 : expressions.entities, fields: fields === null || fields === void 0 ? void 0 : fields.entities }));
                }, isDisabled: isDisabled, variant: ButtonVariant.primary }, t('Save affinity rule')),
            React.createElement(Button, { onClick: onCancel, size: "sm", variant: "link" }, t('Cancel'))), className: "ocs-modal co-catalog-page__overlay", isOpen: isOpen, onClose: onCancel, position: "top", title: title, variant: ModalVariant.medium },
        React.createElement(AffinityForm, { qualifiedNodes: getIntersectedQualifiedNodes({
                expressionNodes: qualifiedExpressionNodes,
                expressions: expressions === null || expressions === void 0 ? void 0 : expressions.entities,
                fieldNodes: qualifiedFieldNodes,
                fields: fields === null || fields === void 0 ? void 0 : fields.entities,
            }), expressions: expressions, fields: fields, focusedAffinity: focusedAffinity, isSubmitDisabled: isDisabled, nodesLoaded: nodesLoaded, setFocusedAffinity: setFocusedAffinity, setSubmitDisabled: setIsDisabled })));
};
export default AffinityEditModal;
//# sourceMappingURL=AffinityEditModal.js.map