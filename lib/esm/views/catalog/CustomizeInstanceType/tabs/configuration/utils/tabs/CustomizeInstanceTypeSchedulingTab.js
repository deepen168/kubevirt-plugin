import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { updateVMCustomizeIT, vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import SchedulingSection from '@virtualmachines/details/tabs/configuration/scheduling/components/SchedulingSection';
var CustomizeInstanceTypeSchedulingTab = function () {
    var vm = vmSignal.value;
    if (!vm) {
        return React.createElement(Loading, null);
    }
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(SchedulingSection, { onSubmit: updateVMCustomizeIT, vm: vm })));
};
export default CustomizeInstanceTypeSchedulingTab;
//# sourceMappingURL=CustomizeInstanceTypeSchedulingTab.js.map