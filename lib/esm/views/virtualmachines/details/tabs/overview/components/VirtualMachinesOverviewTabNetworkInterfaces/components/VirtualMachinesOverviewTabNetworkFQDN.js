import React from 'react';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getHostname } from '@kubevirt-utils/resources/vm';
import { ClipboardCopy, ClipboardCopyVariant, DescriptionList, Divider, } from '@patternfly/react-core';
import './virtual-machines-overview-tab-network-fqdn.scss';
var VirtualMachinesOverviewTabNetworkFQDN = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    if (!vm)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement(Divider, null),
        React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
            React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('The machine type defines the virtual hardware configuration while the operating system name and version refer to the hypervisor.'), descriptionData: React.createElement(ClipboardCopy, { clickTip: t('Copied'), hoverTip: t('Copy to clipboard'), variant: ClipboardCopyVariant.inlineCompact }, "".concat(getName(vm) || getHostname(vm), ".headless.").concat(getNamespace(vm), ".svc.cluster.local")), className: "VirtualMachinesOverviewTabNetworkFQDN--main", descriptionHeader: t('Internal FQDN'), isPopover: true }))));
};
export default VirtualMachinesOverviewTabNetworkFQDN;
//# sourceMappingURL=VirtualMachinesOverviewTabNetworkFQDN.js.map