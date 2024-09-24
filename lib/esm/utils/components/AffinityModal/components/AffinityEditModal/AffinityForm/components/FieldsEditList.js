import React from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Operator } from '@openshift-console/dynamic-plugin-sdk';
import { FormGroup } from '@patternfly/react-core';
import { isTermsInvalid } from '../../../../utils/helpers';
import AffinityEditList from './AffinityEditList';
import ErrorHelperText from './ErrorHelperText';
var FieldsEditList = function (_a) {
    var errorHelperText = _a.errorHelperText, fields = _a.fields, helperText = _a.helperText, label = _a.label;
    var t = useKubevirtTranslation().t;
    var _b = fields || {}, affinityFields = _b.entities, affinityFieldsChanged = _b.initialEntitiesChanged, onFieldAdd = _b.onEntityAdd, onFieldChange = _b.onEntityChange, onFieldDelete = _b.onEntityDelete;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "field-selector", label: label },
            React.createElement(FormGroupHelperText, null, helperText)),
        React.createElement(AffinityEditList, { addRowText: t('Add field'), expressions: affinityFields, onAdd: function () { return onFieldAdd({ id: null, key: '', operator: Operator.In, values: [] }); }, onChange: onFieldChange, onDelete: onFieldDelete, rowID: "field" }),
        isTermsInvalid(affinityFields) && affinityFieldsChanged && (React.createElement(ErrorHelperText, null, errorHelperText))));
};
export default FieldsEditList;
//# sourceMappingURL=FieldsEditList.js.map