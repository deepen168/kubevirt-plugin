import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import CloneTemplateModal from '@kubevirt-utils/components/CloneTemplateModal/CloneTemplateModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateProviderName } from '@kubevirt-utils/resources/template';
import { getOperatingSystemName } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { Alert, AlertVariant, Button, ButtonVariant } from '@patternfly/react-core';
var CommonTemplateAlert = function (_a) {
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var osName = getOperatingSystemName(template);
    var providerName = getTemplateProviderName(template);
    var createModal = useModal().createModal;
    var navigate = useNavigate();
    var goToTemplatePage = React.useCallback(function (clonedTemplate) {
        navigate("/k8s/ns/".concat(clonedTemplate.metadata.namespace, "/templates/").concat(clonedTemplate.metadata.name));
    }, [navigate]);
    return (React.createElement(Alert, { title: t('Templates provided by {{providerName}} are not editable.', {
            providerName: providerName,
        }), className: "alert-margin-top-bottom template-header-alert", "data-test": "common-template-alert", isInline: true, variant: AlertVariant.info },
        t('{{ osName }} VirtualMachine can not be edited because it is provided by OpenShift Virtualization Operator.', { osName: osName }),
        React.createElement("br", null),
        t('We suggest you to create a custom Template from this {{ providerName }} Template.', {
            providerName: providerName,
        }),
        React.createElement("div", { className: "margin-top" },
            React.createElement(Button, { onClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(CloneTemplateModal, { isOpen: isOpen, obj: template, onClose: onClose, onTemplateCloned: goToTemplatePage }));
                    });
                }, variant: ButtonVariant.link }, t('Create a new custom Template')))));
};
export default CommonTemplateAlert;
//# sourceMappingURL=CommonTemplateAlert.js.map