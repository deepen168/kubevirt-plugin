import React from 'react';
import NetworkInterfaceList from '@catalog/wizard/tabs/network/components/list/NetworkInterfaceList';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { updateCustomizeInstanceType, vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import AddNetworkInterfaceButton from '@virtualmachines/details/tabs/configuration/network/components/AddNetworkInterfaceButton';
var CustomizeInstanceTypeNetworkTab = function () {
    var t = useKubevirtTranslation().t;
    var vm = vmSignal.value;
    if (!vm) {
        return React.createElement(Loading, null);
    }
    var onAddNetworkInterface = function (updatedNetworks, updatedInterfaces) {
        return Promise.resolve(updateCustomizeInstanceType([
            {
                data: updatedNetworks,
                path: 'spec.template.spec.networks',
            },
            {
                data: updatedInterfaces,
                path: 'spec.template.spec.domain.devices.interfaces',
            },
        ]));
    };
    var onUpdateVM = function (updatedVM) {
        updateCustomizeInstanceType([{ data: updatedVM }]);
        return Promise.resolve();
    };
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "network" }, t('Network interfaces'))),
        React.createElement(AddNetworkInterfaceButton, { onAddNetworkInterface: onAddNetworkInterface, vm: vm }),
        React.createElement(NetworkInterfaceList, { onUpdateVM: onUpdateVM, vm: vm })));
};
export default CustomizeInstanceTypeNetworkTab;
//# sourceMappingURL=CustomizeInstanceTypeNetworkTab.js.map