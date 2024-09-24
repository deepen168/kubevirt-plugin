import React from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Operator } from '@openshift-console/dynamic-plugin-sdk';
import { FormGroup } from '@patternfly/react-core';
import { isTermsInvalid } from '../../../../utils/helpers';
import AffinityEditList from './AffinityEditList';
import ErrorHelperText from './ErrorHelperText';
var ExpressionEditList = function (_a) {
    var errorHelperText = _a.errorHelperText, expressions = _a.expressions, helperText = _a.helperText, label = _a.label;
    var t = useKubevirtTranslation().t;
    var _b = expressions || {}, affinityExpressions = _b.entities, affinityExpressionsChanged = _b.initialEntitiesChanged, onExpressionAdd = _b.onEntityAdd, onExpressionChange = _b.onEntityChange, onExpressionDelete = _b.onEntityDelete;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "expression-selector", label: label },
            React.createElement(FormGroupHelperText, null, helperText)),
        React.createElement(AffinityEditList, { addRowText: t('Add expression'), expressions: affinityExpressions, onAdd: function () { return onExpressionAdd({ id: null, key: '', operator: Operator.In, values: [] }); }, onChange: onExpressionChange, onDelete: onExpressionDelete, rowID: "expression" }),
        isTermsInvalid(affinityExpressions) && affinityExpressionsChanged && (React.createElement(ErrorHelperText, null, errorHelperText))));
};
export default ExpressionEditList;
//# sourceMappingURL=ExpressionEditList.js.map