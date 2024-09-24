import * as React from 'react';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { ListPageBody, ListPageCreateButton } from '@openshift-console/dynamic-plugin-sdk';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import NetworkInterfaceList from './components/list/NetworkInterfaceList';
import WizardNetworkInterfaceModal from './components/modal/WizardNetworkInterfaceModal';
var WizardNetworkTab = function (_a) {
    var updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var actionText = t('Add network interface');
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(ListPageBody, null,
            React.createElement(SidebarEditor, { onResourceUpdate: function (newVM) { return updateVM(newVM); }, pathsToHighlight: PATHS_TO_HIGHLIGHT.NETWORK_TAB, resource: vm },
                React.createElement(ListPageCreateButton, { onClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(WizardNetworkInterfaceModal, { headerText: actionText, isOpen: isOpen, onClose: onClose, updateVM: updateVM, vm: vm }));
                        });
                    }, className: "list-page-create-button-margin" }, actionText),
                React.createElement(NetworkInterfaceList, { vm: vm })))));
};
export default WizardNetworkTab;
//# sourceMappingURL=WizardNetworkTab.js.map