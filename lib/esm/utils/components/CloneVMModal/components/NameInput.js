import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput } from '@patternfly/react-core';
var NameInput = function (_a) {
    var name = _a.name, setName = _a.setName;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Name') },
        React.createElement(TextInput, { id: "name", onChange: function (_, value) { return setName(value); }, type: "text", value: name })));
};
export default NameInput;
//# sourceMappingURL=NameInput.js.map