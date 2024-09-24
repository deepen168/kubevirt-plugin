import React from 'react';
import WindowsDrivers from '@kubevirt-utils/components/WindowsDrivers/WindowsDrivers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateOS, OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { FormGroup } from '@patternfly/react-core';
import { useDrawerContext } from '../hooks/useDrawerContext';
var DriversCheckbox = function () {
    var t = useKubevirtTranslation().t;
    var _a = useDrawerContext(), setVM = _a.setVM, template = _a.template, vm = _a.vm;
    return (React.createElement(FormGroup, { fieldId: "customize-cdrom-drivers", label: t('Drivers') },
        React.createElement(WindowsDrivers, { isWindows: getTemplateOS(template) === OS_NAME_TYPES.windows, updateVM: setVM, vm: vm })));
};
export default DriversCheckbox;
//# sourceMappingURL=DriversCheckbox.js.map