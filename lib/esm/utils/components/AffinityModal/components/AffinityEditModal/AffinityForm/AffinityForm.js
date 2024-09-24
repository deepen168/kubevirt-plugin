import * as React from 'react';
import NodeCheckerAlert from '@kubevirt-utils/components/NodeSelectorModal/components/NodeCheckerAlert';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Divider, Form, Text, TextVariants } from '@patternfly/react-core';
import { isTermsInvalid } from '../../../utils/helpers';
import { AffinityCondition, AffinityType, } from '../../../utils/types';
import AffinityConditionSelect from './components/AffinityConditionSelect';
import AffinityTypeSelect from './components/AffinityTypeSelect';
import ExpressionEditList from './components/ExpressionEditList';
import FieldsEditList from './components/FieldsEditList';
import NodeExpressionDescriptionText from './components/NodeExpressionDescriptionText';
import NodeFieldsDescriptionText from './components/NodeFieldsDescriptionText';
import PrefferedAffinityWeightInput from './components/PrefferedAffinityWeightInput';
import TopologyKeyInput from './components/TopologyKeyInput';
import WorkloadExpressionDescriptionText from './components/WorkloadExpressionDescriptionText';
var AffinityForm = function (_a) {
    var expressions = _a.expressions, fields = _a.fields, focusedAffinity = _a.focusedAffinity, isSubmitDisabled = _a.isSubmitDisabled, nodesLoaded = _a.nodesLoaded, qualifiedNodes = _a.qualifiedNodes, setFocusedAffinity = _a.setFocusedAffinity, setSubmitDisabled = _a.setSubmitDisabled;
    var t = useKubevirtTranslation().t;
    var isNodeAffinity = (focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.type) === AffinityType.node;
    React.useEffect(function () {
        var _a, _b;
        setSubmitDisabled((((_a = expressions === null || expressions === void 0 ? void 0 : expressions.entities) === null || _a === void 0 ? void 0 : _a.length) === 0 && ((_b = fields === null || fields === void 0 ? void 0 : fields.entities) === null || _b === void 0 ? void 0 : _b.length) === 0) ||
            isTermsInvalid(expressions === null || expressions === void 0 ? void 0 : expressions.entities) ||
            isTermsInvalid(fields === null || fields === void 0 ? void 0 : fields.entities));
    }, [expressions, fields, setSubmitDisabled]);
    return (React.createElement(Form, null,
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Define an affinity rule. This rule will be added to the list of affinity rules applied to this workload.')),
        React.createElement(AffinityTypeSelect, { focusedAffinity: focusedAffinity, setFocusedAffinity: setFocusedAffinity }),
        React.createElement(AffinityConditionSelect, { focusedAffinity: focusedAffinity, setFocusedAffinity: setFocusedAffinity }),
        (focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.condition) === AffinityCondition.preferred && (React.createElement(PrefferedAffinityWeightInput, { focusedAffinity: focusedAffinity, setFocusedAffinity: setFocusedAffinity, setSubmitDisabled: setSubmitDisabled })),
        !isNodeAffinity && (React.createElement(TopologyKeyInput, { focusedAffinity: focusedAffinity, setFocusedAffinity: setFocusedAffinity, setSubmitDisabled: setSubmitDisabled })),
        React.createElement(Divider, null),
        React.createElement(ExpressionEditList, { errorHelperText: t('Missing fields in {{kind}} labels', {
                kind: isNodeAffinity ? 'Node' : 'Workload',
            }), helperText: isNodeAffinity ? React.createElement(NodeExpressionDescriptionText, null) : React.createElement(WorkloadExpressionDescriptionText, null), expressions: expressions, label: isNodeAffinity ? t('Node labels') : t('Workload labels') }),
        isNodeAffinity && (React.createElement(React.Fragment, null,
            React.createElement(Divider, null),
            React.createElement(FieldsEditList, { errorHelperText: t('Missing fields in Node fields'), fields: fields, helperText: React.createElement(NodeFieldsDescriptionText, null), label: t('Node fields') }))),
        isNodeAffinity && nodesLoaded && !isSubmitDisabled && (React.createElement(NodeCheckerAlert, { nodesLoaded: nodesLoaded, qualifiedNodes: qualifiedNodes }))));
};
export default AffinityForm;
//# sourceMappingURL=AffinityForm.js.map