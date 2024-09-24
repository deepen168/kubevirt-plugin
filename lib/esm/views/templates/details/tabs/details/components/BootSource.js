import React from 'react';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useVMTemplateSource } from '@kubevirt-utils/resources/template';
var BootSource = function (_a) {
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var isBootSourceAvailable = useVMTemplateSource(template).isBootSourceAvailable;
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: isBootSourceAvailable ? t('Available') : t('Unavailable'), descriptionHeader: t('Boot source') }));
};
export default BootSource;
//# sourceMappingURL=BootSource.js.map