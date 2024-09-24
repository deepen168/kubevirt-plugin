import * as React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useLastNamespacePath } from '@kubevirt-utils/hooks/useLastNamespacePath';
import { Breadcrumb, BreadcrumbItem, Button } from '@patternfly/react-core';
export var VirtualMachineBreadcrumb = React.memo(function () {
    var namespacePath = useLastNamespacePath();
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    return (React.createElement("div", null,
        React.createElement(Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
            React.createElement(BreadcrumbItem, null,
                React.createElement(Button, { isInline: true, onClick: function () { return navigate("/k8s/".concat(namespacePath, "/").concat(VirtualMachineModelRef)); }, variant: "link" }, t('VirtualMachines'))),
            React.createElement(BreadcrumbItem, null, t('VirtualMachine details')))));
});
export default VirtualMachineBreadcrumb;
//# sourceMappingURL=VirtualMachineBreadcrumb.js.map