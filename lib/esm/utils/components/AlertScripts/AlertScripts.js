import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant } from '@patternfly/react-core';
var AlertScripts = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Alert, { title: t('Cloud-init and SSH key configurations will be applied to the VirtualMachine only at the first boot.'), className: "scripts-alert", isInline: true, variant: AlertVariant.warning }, t('You must ensure that the configuration is correct before starting the VirtualMachine.')));
};
export default AlertScripts;
//# sourceMappingURL=AlertScripts.js.map