import * as React from 'react';
import GuestAgentIsRequiredText from '@kubevirt-utils/components/GuestAgentIsRequiredText/GuestAgentIsRequiredText';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getOsNameFromGuestAgent } from '@kubevirt-utils/resources/vmi';
import { isEmpty } from '@kubevirt-utils/utils/utils';
var OperatingSystem = function (_a) {
    var guestAgentData = _a.guestAgentData, loadedGuestAgent = _a.loadedGuestAgent, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: (loadedGuestAgent &&
            !isEmpty(guestAgentData) &&
            getOsNameFromGuestAgent(guestAgentData)) || React.createElement(GuestAgentIsRequiredText, { vmi: vmi }), descriptionHeader: t('Operating system') }));
};
export default OperatingSystem;
//# sourceMappingURL=OperatingSystem.js.map