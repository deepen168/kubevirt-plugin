import * as React from 'react';
import FirstItemListPopover from 'src/views/virtualmachines/list/components/FirstItemListPopover/FirstItemListPopover';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMIIPAddressesWithName } from '@kubevirt-utils/resources/vmi';
var IP = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var ipAddressesWithNames = getVMIIPAddressesWithName(vmi);
    return React.createElement(FirstItemListPopover, { headerContent: t('IP addresses'), items: ipAddressesWithNames });
};
export default IP;
//# sourceMappingURL=IP.js.map