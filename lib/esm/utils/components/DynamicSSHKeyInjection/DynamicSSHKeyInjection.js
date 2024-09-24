import React, { useEffect, useState } from 'react';
import { getIsDynamicSSHInjectionEnabled } from '@kubevirt-utils/resources/vm';
import { Switch } from '@patternfly/react-core';
export var DynamicSSHKeyInjection = function (_a) {
    var hasDynamicSSHLabel = _a.hasDynamicSSHLabel, isDisabled = _a.isDisabled, onSubmit = _a.onSubmit, vm = _a.vm;
    var _b = useState(getIsDynamicSSHInjectionEnabled(vm)), isChecked = _b[0], setIsChecked = _b[1];
    useEffect(function () {
        if (!vm && !hasDynamicSSHLabel)
            setIsChecked(false);
    }, [vm, hasDynamicSSHLabel, setIsChecked]);
    return (React.createElement(Switch, { onChange: function (_event, checked) {
            setIsChecked(checked);
            onSubmit(checked);
        }, isChecked: isChecked, isDisabled: isDisabled }));
};
//# sourceMappingURL=DynamicSSHKeyInjection.js.map