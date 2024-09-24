import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Title } from '@patternfly/react-core';
import './VirtualMachineConsolePageTitle.scss';
var VirtualMachineConsolePageTitle = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Title, { className: "virtual-machine-console-page-title", headingLevel: "h2" }, t('Console')));
};
export default VirtualMachineConsolePageTitle;
//# sourceMappingURL=VirtualMachineConsolePageTitle.js.map