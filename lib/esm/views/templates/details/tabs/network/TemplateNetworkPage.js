import React, { useCallback } from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sUpdate, ListPageBody } from '@openshift-console/dynamic-plugin-sdk';
import { Button, PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import useEditTemplateAccessReview from '../../hooks/useIsTemplateEditable';
import NetworkInterfaceList from './components/list/NetworkInterfaceList';
import TemplatesNetworkInterfaceModal from './components/modal/TemplatesNetworkInterfaceModal';
var TemplateNetwork = function (_a) {
    var template = _a.obj;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var actionText = t('Add network interface');
    var onSubmitTemplate = useCallback(function (updatedTemplate) {
        var _a, _b;
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, []);
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(ListPageBody, null,
            React.createElement(SidebarEditor, { onResourceUpdate: onSubmitTemplate, resource: template },
                React.createElement(Title, { className: "list-page-create-button-margin", headingLevel: "h2" }, t('Network interfaces')),
                React.createElement(Button, { onClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(TemplatesNetworkInterfaceModal, { headerText: actionText, isOpen: isOpen, onClose: onClose, template: template }));
                        });
                    }, className: "template-network-tab__button", isDisabled: !isTemplateEditable }, actionText),
                React.createElement(NetworkInterfaceList, { template: template })))));
};
export default TemplateNetwork;
//# sourceMappingURL=TemplateNetworkPage.js.map