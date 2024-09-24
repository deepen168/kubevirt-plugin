import React from 'react';
import { VirtualMachineClusterInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var SelectInstanceTypeToggle = function (_a) {
    var selected = _a.selected;
    var t = useKubevirtTranslation().t;
    if (isEmpty(selected))
        return t('Select InstanceType');
    return (React.createElement(ResourceLink, { groupVersionKind: VirtualMachineClusterInstancetypeModelGroupVersionKind, linkTo: false, name: selected }));
};
export default SelectInstanceTypeToggle;
//# sourceMappingURL=SelectInstanceTypeToggle.js.map