import React from 'react';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { CardTitle, PopoverPosition } from '@patternfly/react-core';
var VirtualMachinesOverviewTabFilesystemTitle = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(CardTitle, { className: "text-muted" },
        t('File systems'),
        ' ',
        React.createElement(HelpTextIcon, { bodyContent: t('The following information regarding how the disks are partitioned is provided by the guest agent.'), position: PopoverPosition.right })));
};
export default VirtualMachinesOverviewTabFilesystemTitle;
//# sourceMappingURL=VirtualMachinesOverviewTabFilesystemTitle.js.map