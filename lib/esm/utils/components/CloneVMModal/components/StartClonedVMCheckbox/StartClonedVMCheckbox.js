import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, FormGroup } from '@patternfly/react-core';
import './StartClonedVMCheckbox.scss';
var StartClonedVMCheckbox = function (_a) {
    var setStartCloneVM = _a.setStartCloneVM, startCloneVM = _a.startCloneVM;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { className: "StartClonedVMCheckbox", fieldId: "start-clone" },
        React.createElement(Checkbox, { id: "start-clone", isChecked: startCloneVM, label: t('Start VirtualMachine once created'), onChange: function (_, checked) { return setStartCloneVM(checked); } })));
};
export default StartClonedVMCheckbox;
//# sourceMappingURL=StartClonedVMCheckbox.js.map