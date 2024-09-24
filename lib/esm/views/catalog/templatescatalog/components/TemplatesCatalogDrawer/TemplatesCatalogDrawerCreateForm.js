import React, { memo } from 'react';
import { DRAWER_FORM_ID } from '@catalog/templatescatalog/utils/consts';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, Button, ButtonVariant, Checkbox, DescriptionList, FormGroup, Split, SplitItem, Stack, StackItem, TextInput, Tooltip, } from '@patternfly/react-core';
import useCreateDrawerForm from './hooks/useCreateDrawerForm';
import { useDrawerContext } from './hooks/useDrawerContext';
import AuthorizedSSHKey from './AuthorizedSSHKey';
export var TemplatesCatalogDrawerCreateForm = memo(function (_a) {
    var authorizedSSHKey = _a.authorizedSSHKey, namespace = _a.namespace, onCancel = _a.onCancel, subscriptionData = _a.subscriptionData;
    var t = useKubevirtTranslation().t;
    var _b = useDrawerContext(), isBootSourceAvailable = _b.isBootSourceAvailable, templateLoadingError = _b.templateLoadingError;
    var _c = useCreateDrawerForm(namespace, subscriptionData, authorizedSSHKey), createError = _c.createError, isCustomizeDisabled = _c.isCustomizeDisabled, isCustomizeLoading = _c.isCustomizeLoading, isQuickCreateDisabled = _c.isQuickCreateDisabled, isQuickCreateLoading = _c.isQuickCreateLoading, nameField = _c.nameField, onChangeStartVM = _c.onChangeStartVM, onCustomize = _c.onCustomize, onQuickCreate = _c.onQuickCreate, onVMNameChange = _c.onVMNameChange, runStrategy = _c.runStrategy, startVM = _c.startVM;
    var error = templateLoadingError || createError;
    return (React.createElement("form", { className: "template-catalog-drawer-form", id: "quick-create-form" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(React.Fragment, null,
                React.createElement(StackItem, null,
                    React.createElement(Split, { hasGutter: true },
                        React.createElement(SplitItem, { className: "template-catalog-drawer-form-name", isFilled: true },
                            React.createElement(FormGroup, { fieldId: "vm-name-field", isRequired: true, label: t('VirtualMachine name') },
                                React.createElement(TextInput, { "aria-label": "virtualmachine name", "data-test-id": "template-catalog-vm-name-input", isDisabled: Boolean(templateLoadingError), isRequired: true, name: "vmname", onChange: function (_, value) { return onVMNameChange(value); }, type: "text", value: nameField }))),
                        React.createElement(SplitItem, null,
                            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                                React.createElement(VirtualMachineDescriptionItem, { descriptionData: namespace, descriptionHeader: t('Project') }))),
                        React.createElement(AuthorizedSSHKey, { authorizedSSHKey: authorizedSSHKey, namespace: namespace }))),
                React.createElement(StackItem, null),
                React.createElement(StackItem, null,
                    React.createElement(Checkbox, { label: runStrategy
                            ? t('Start this VirtualMachine after creation ({{runStrategy}})', {
                                runStrategy: runStrategy,
                            })
                            : t('Start this VirtualMachine after creation'), id: "start-after-create-checkbox", isChecked: startVM || runStrategy === 'Always' || runStrategy === 'RerunOnFailure', onChange: function (_, checked) { return onChangeStartVM(checked); } }))),
            React.createElement(StackItem, null),
            error && (React.createElement(StackItem, null,
                React.createElement(Alert, { isInline: true, title: t('Quick create error'), variant: AlertVariant.danger },
                    React.createElement(Stack, { hasGutter: true },
                        React.createElement(StackItem, null, error.message),
                        (error === null || error === void 0 ? void 0 : error.href) && (React.createElement(StackItem, null,
                            React.createElement("a", { href: error.href, rel: "noreferrer", target: "_blank" }, error.href))))))),
            React.createElement(StackItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement(Tooltip, { content: isBootSourceAvailable
                                ? t('To enable Quick create button, fill all the required parameters and storage fields')
                                : t('Source not available'), hidden: !isQuickCreateDisabled },
                            React.createElement("span", null,
                                React.createElement(Button, { "data-test-id": "quick-create-vm-btn", form: DRAWER_FORM_ID, isDisabled: isQuickCreateDisabled, isLoading: isQuickCreateLoading, onClick: onQuickCreate, type: "submit" }, t('Quick create VirtualMachine'))))),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { "data-test-id": "customize-vm-btn", form: DRAWER_FORM_ID, isDisabled: isCustomizeDisabled, isLoading: isCustomizeLoading, onClick: onCustomize, variant: ButtonVariant.secondary }, t('Customize VirtualMachine'))),
                    React.createElement(Button, { onClick: function () { return onCancel(); }, variant: ButtonVariant.link }, t('Cancel')))))));
});
//# sourceMappingURL=TemplatesCatalogDrawerCreateForm.js.map