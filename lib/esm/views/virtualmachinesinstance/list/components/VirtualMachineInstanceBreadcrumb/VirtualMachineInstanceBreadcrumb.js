import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { VirtualMachineInstanceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useLastNamespacePath } from '@kubevirt-utils/hooks/useLastNamespacePath';
import { Breadcrumb, BreadcrumbItem, Button, ButtonVariant } from '@patternfly/react-core';
var VirtualMachineInstanceBreadcrumb = memo(function () {
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var lastNamespacePath = useLastNamespacePath();
    return (React.createElement("div", null,
        React.createElement(Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
            React.createElement(BreadcrumbItem, null,
                React.createElement(Button, { isInline: true, onClick: function () { return navigate("/k8s/".concat(lastNamespacePath, "/").concat(VirtualMachineInstanceModelRef)); }, variant: ButtonVariant.link }, t('VirtualMachineInstances'))),
            React.createElement(BreadcrumbItem, null, t('VirtualMachineInstance details')))));
});
export default VirtualMachineInstanceBreadcrumb;
//# sourceMappingURL=VirtualMachineInstanceBreadcrumb.js.map