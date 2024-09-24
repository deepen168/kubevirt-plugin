import * as React from 'react';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom-v5-compat';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Stack, StackItem } from '@patternfly/react-core';
export var WizardNoBootModal = function (_a) {
    var isOpen = _a.isOpen, namespace = _a.namespace, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var goToDisksTab = function () {
        onClose();
        navigate("/k8s/ns/".concat(namespace, "/catalog/template/review/disks"));
    };
    return (React.createElement(TabModal, { headerText: t('No available boot source'), isOpen: isOpen, obj: null, onClose: onClose, onSubmit: onSubmit, positionTop: false, submitBtnText: t('Create with no available boot source'), titleIconVariant: "warning" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement("p", null, t('The VirtualMachine you are creating does not have an available boot source. We recommended that you select a boot source to create the VirtualMachine.'))),
            React.createElement(StackItem, null,
                React.createElement(Trans, { ns: "plugin__kubevirt-plugin" },
                    "You can select the boot source in the",
                    ' ',
                    React.createElement(Button, { isInline: true, onClick: goToDisksTab, variant: "link" }, "Disks"),
                    ' ',
                    "tab.")))));
};
//# sourceMappingURL=WizardNoBootModal.js.map