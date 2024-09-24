import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { updateCustomizeInstanceType, updateVMCustomizeIT, vmSignal, } from '@kubevirt-utils/store/customizeInstanceType';
import { DescriptionList, Divider, PageSection, PageSectionVariants, Title, } from '@patternfly/react-core';
import InitialRunTabCloudinit from '@virtualmachines/details/tabs/configuration/initialrun/components/InitialRunTabCloudinit';
import InitialRunTabSysprep from '@virtualmachines/details/tabs/configuration/initialrun/components/InitialRunTabSysprep';
var CustomizeInstanceTypeInitialRunTab = function () {
    var t = useKubevirtTranslation().t;
    var vm = vmSignal.value;
    if (!vm) {
        return React.createElement(Loading, null);
    }
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "initial-run" }, t('Initial run'))),
        React.createElement(DescriptionList, { className: "pf-c-description-list" },
            React.createElement(InitialRunTabCloudinit, { canUpdateVM: true, onSubmit: updateVMCustomizeIT, vm: vm }),
            React.createElement(Divider, null),
            React.createElement(InitialRunTabSysprep, { canUpdateVM: true, onSubmit: updateCustomizeInstanceType, vm: vm }))));
};
export default CustomizeInstanceTypeInitialRunTab;
//# sourceMappingURL=CustomizeInstanceTypeInitialRunTab.js.map