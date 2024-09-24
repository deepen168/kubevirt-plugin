import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput } from '@patternfly/react-core';
var NameFormField = function (_a) {
    var objName = _a.objName, setObjName = _a.setObjName;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Name') },
        React.createElement(TextInput, { id: "name", onChange: function (_, name) { return setObjName(name); }, type: "text", value: objName })));
};
export default NameFormField;
//# sourceMappingURL=NameFormField.js.map