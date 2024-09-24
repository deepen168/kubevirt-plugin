import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ExpandableSection } from '@patternfly/react-core';
import { useDrawerContext } from './hooks/useDrawerContext';
import { FieldGroup } from './FieldGroup';
import { changeTemplateParameterValue, getTemplateParametersSplit } from './utils';
var FieldsSections = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDrawerContext(), setTemplate = _a.setTemplate, template = _a.template;
    var _b = getTemplateParametersSplit(template === null || template === void 0 ? void 0 : template.parameters), requiredParameters = _b[0], optionalParameters = _b[1];
    var _c = useState(true), requiredSectionOpen = _c[0], setRequiredSectionOpen = _c[1];
    var onFieldValueChange = function (name, value) {
        setTemplate(function (draftTemplate) { return changeTemplateParameterValue(draftTemplate, name, value); });
    };
    return (React.createElement(React.Fragment, null,
        !isEmpty(requiredParameters) && (React.createElement(ExpandableSection, { isExpanded: requiredSectionOpen, isIndented: true, onToggle: function (_event, val) { return setRequiredSectionOpen(val); }, toggleText: t('Required parameters') }, requiredParameters.map(function (param) { return (React.createElement(FieldGroup, { field: param, key: param.name, onChange: onFieldValueChange })); }))),
        !isEmpty(optionalParameters) && (React.createElement(ExpandableSection, { isIndented: true, toggleText: t('Optional parameters') }, optionalParameters.map(function (param) { return (React.createElement(FieldGroup, { field: param, key: param.name, onChange: onFieldValueChange })); })))));
};
export default FieldsSections;
//# sourceMappingURL=FieldsSections.js.map