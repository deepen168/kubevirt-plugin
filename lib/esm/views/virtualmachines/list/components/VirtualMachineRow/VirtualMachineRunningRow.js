import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMIIPAddressesWithName } from '@kubevirt-utils/resources/vmi';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import FirstItemListPopover from '../FirstItemListPopover/FirstItemListPopover';
import VirtualMachineRowLayout from './VirtualMachineRowLayout';
var VirtualMachineRunningRow = function (_a) {
    var _b;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _c = _a.rowData, isSingleNodeCluster = _c.isSingleNodeCluster, vmi = _c.vmi, vmim = _c.vmim;
    var t = useKubevirtTranslation().t;
    var ipAddressess = vmi && getVMIIPAddressesWithName(vmi);
    return (React.createElement(VirtualMachineRowLayout, { rowData: {
            ips: React.createElement(FirstItemListPopover, { headerContent: t('IP addresses'), items: ipAddressess }),
            isSingleNodeCluster: isSingleNodeCluster,
            node: React.createElement(ResourceLink, { kind: "Node", name: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _b === void 0 ? void 0 : _b.nodeName }),
            vmim: vmim,
        }, activeColumnIDs: activeColumnIDs, obj: obj }));
};
export default VirtualMachineRunningRow;
//# sourceMappingURL=VirtualMachineRunningRow.js.map