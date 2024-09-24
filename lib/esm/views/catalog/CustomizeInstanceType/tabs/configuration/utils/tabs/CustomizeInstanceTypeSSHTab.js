import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { updateVMCustomizeIT, vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { Grid, GridItem, PageSection, PageSectionVariants, Stack, Title, } from '@patternfly/react-core';
import SSHTabAuthorizedSSHKey from '@virtualmachines/details/tabs/configuration/ssh/components/SSHTabAuthorizedSSHKey';
import SSHTabSSHAccess from '@virtualmachines/details/tabs/configuration/ssh/components/SSHTabSSHAccess';
var CustomizeInstanceTypeSSHTab = function () {
    var t = useKubevirtTranslation().t;
    var vm = vmSignal.value;
    if (!vm) {
        return React.createElement(Loading, null);
    }
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "ssh" },
                t('SSH settings'),
                " ")),
        React.createElement(Grid, { span: 6 },
            React.createElement(GridItem, null,
                React.createElement(Stack, { hasGutter: true },
                    React.createElement(SSHTabSSHAccess, { isCustomizeInstanceType: true, vm: vm }),
                    React.createElement(SSHTabAuthorizedSSHKey, { isCustomizeInstanceType: true, onUpdateVM: updateVMCustomizeIT, vm: vm }))))));
};
export default CustomizeInstanceTypeSSHTab;
//# sourceMappingURL=CustomizeInstanceTypeSSHTab.js.map