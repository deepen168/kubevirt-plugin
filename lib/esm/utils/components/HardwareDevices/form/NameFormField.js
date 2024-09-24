import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, GridItem, TextInput } from '@patternfly/react-core';
var NameFormField = function (_a) {
    var index = _a.index, name = _a.name, setName = _a.setName;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 5 },
            React.createElement(FormGroup, { fieldId: "name", label: !index && t('Name') },
                React.createElement(TextInput, { id: "name", onChange: function (_, value) { return setName(value); }, type: "text", value: name })))));
};
export default NameFormField;
//# sourceMappingURL=NameFormField.js.map