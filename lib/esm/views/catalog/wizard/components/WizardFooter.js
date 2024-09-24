import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useWizardSourceAvailable } from '@catalog/utils/useWizardSourceAvailable';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { logTemplateFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { CANCEL_CUSTOMIZE_VM_BUTTON_CLICKED, CUSTOMIZE_PAGE_CREATE_VM_BUTTON_CLICKED, } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getResourceUrl } from '@kubevirt-utils/resources/shared';
import { createHeadlessService } from '@kubevirt-utils/utils/headless-service';
import { Alert, Button, Checkbox, Split, SplitItem, Stack, StackItem, } from '@patternfly/react-core';
import { useWizardVmCreate } from '../../utils/useWizardVmCreate';
import { clearSessionStorageVM, useWizardVMContext } from '../../utils/WizardVMContext';
import { WizardNoBootModal } from './WizardNoBootModal';
export var WizardFooter = function (_a) {
    var _b, _c;
    var namespace = _a.namespace;
    var navigate = useNavigate();
    var t = useKubevirtTranslation().t;
    var _d = useWizardVMContext(), disableVmCreate = _d.disableVmCreate, vmContextLoaded = _d.loaded, updateVM = _d.updateVM, vm = _d.vm;
    var _e = useWizardSourceAvailable(), isBootSourceAvailable = _e.isBootSourceAvailable, bootSourceLoaded = _e.loaded;
    var _f = useWizardVmCreate(), createVM = _f.createVM, error = _f.error, vmCreateLoaded = _f.loaded;
    var createModal = useModal().createModal;
    var isDisableGuestSystemAccessLog = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).featureEnabled;
    var onCreate = function () {
        return createVM({
            isDisableGuestSystemAccessLog: isDisableGuestSystemAccessLog,
            onFullfilled: function (createdVM) {
                createHeadlessService(createdVM);
                clearSessionStorageVM();
                navigate(getResourceUrl({ model: VirtualMachineModel, resource: createdVM }));
            },
        });
    };
    var onSubmit = function () {
        logTemplateFlowEvent(CUSTOMIZE_PAGE_CREATE_VM_BUTTON_CLICKED, null, { vmName: getName(vm) });
        if (isBootSourceAvailable) {
            return onCreate();
        }
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(WizardNoBootModal, { isOpen: isOpen, namespace: namespace, onClose: onClose, onSubmit: onCreate }));
        });
    };
    var loaded = vmContextLoaded && vmCreateLoaded && bootSourceLoaded;
    var onChangeStartVM = useCallback(function (checked) {
        updateVM(function (draftVM) {
            delete draftVM.spec.runStrategy;
            draftVM.spec.running = checked;
        });
    }, [updateVM]);
    var runStrategy = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.runStrategy;
    return (React.createElement("footer", { className: "vm-wizard-footer" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(Checkbox, { isChecked: ((_c = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _c === void 0 ? void 0 : _c.running) || runStrategy === 'Always' || runStrategy === 'RerunOnFailure', label: runStrategy
                        ? t('Start this VirtualMachine after creation ({{runStrategy}})', {
                            runStrategy: runStrategy,
                        })
                        : t('Start this VirtualMachine after creation'), id: "start-after-create-checkbox", isDisabled: !loaded || disableVmCreate || !isBootSourceAvailable, onChange: function (_, checked) { return onChangeStartVM(checked); } })),
            React.createElement(StackItem, null),
            error && (React.createElement(StackItem, null,
                React.createElement(Alert, { isInline: true, title: t('Create VirtualMachine error'), variant: "danger" }, error.message))),
            React.createElement("div", { "data-test-id": "create-virtual-machine" },
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { isDisabled: !loaded || disableVmCreate, isLoading: !vmCreateLoaded, onClick: onSubmit, variant: "primary" }, t('Create VirtualMachine'))),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { onClick: function () {
                                logTemplateFlowEvent(CANCEL_CUSTOMIZE_VM_BUTTON_CLICKED, null, {
                                    vmName: getName(vm),
                                });
                                if (confirm(t('Are you sure you want to cancel?'))) {
                                    clearSessionStorageVM();
                                    navigate("/k8s/ns/".concat(namespace, "/catalog/template"));
                                }
                            }, variant: "link" }, t('Cancel'))))))));
};
//# sourceMappingURL=WizardFooter.js.map