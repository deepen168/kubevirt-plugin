var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import produce from 'immer';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import { getCloudInitPropagationMethod, getPropagationMethod, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Radio, Split, SplitItem, Stack, StackItem } from '@patternfly/react-core';
import CloudInitInfoHelper from '../CloudinitDescription/CloudinitInfoHelper';
import TabModal from '../TabModal/TabModal';
import { useCloudInit } from './utils/useCloudInit';
import CloudinitForm from './CloudinitForm';
import './cloud-init.scss';
var CloudinitModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useCloudInit(vm), updatedVM = _b.updatedVM, updateFromYAML = _b.updateFromYAML, cloudInitHookValues = __rest(_b, ["updatedVM", "updateFromYAML"]);
    var _c = useState(false), showEditor = _c[0], setShowEditor = _c[1];
    var _d = useState(false), isSubmitDisabled = _d[0], setSubmitDisabled = _d[1];
    var onEditorSave = function (yaml) {
        setSubmitDisabled(false);
        updateFromYAML(yaml);
    };
    var onSubmitModal = function () {
        var updateSSHDynamicInjectionVM = produce(updatedVM, function (vmDraft) {
            var _a, _b;
            if ((_b = (_a = getPropagationMethod(vmDraft)) === null || _a === void 0 ? void 0 : _a.qemuGuestAgent) === null || _b === void 0 ? void 0 : _b.users) {
                vmDraft.spec.template.spec.accessCredentials[0].sshPublicKey.propagationMethod =
                    getCloudInitPropagationMethod(true, vmDraft);
            }
        });
        return onSubmit(updateSSHDynamicInjectionVM);
    };
    return (React.createElement(TabModal, { headerText: t('Cloud-init'), isDisabled: isSubmitDisabled, isOpen: isOpen, onClose: onClose, onSubmit: onSubmitModal, submitBtnText: t('Apply') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null, vmi && React.createElement(ModalPendingChangesAlert, null)),
            React.createElement(CloudInitInfoHelper, null),
            React.createElement(StackItem, { className: "kv-cloudinit--radio" },
                React.createElement(Split, { hasGutter: true },
                    React.createElement(SplitItem, null,
                        React.createElement("strong", null, t('Configure via:'))),
                    React.createElement(SplitItem, null,
                        React.createElement(Radio, { onChange: function () {
                                setShowEditor(false);
                                setSubmitDisabled(false);
                            }, "aria-label": 'form-radio', id: "form-radio", isChecked: !showEditor, label: t('Form view'), name: 'form-radio' })),
                    React.createElement(SplitItem, null,
                        React.createElement(Radio, { onChange: function () {
                                setShowEditor(true);
                                setSubmitDisabled(true);
                            }, "aria-label": 'editor-radio', id: "editor-radio", isChecked: showEditor, label: t('Script'), name: 'editor-radio' })))),
            React.createElement(CloudinitForm, __assign({ onEditorSave: onEditorSave, setSubmitDisabled: setSubmitDisabled, showEditor: showEditor }, cloudInitHookValues)))));
};
export default CloudinitModal;
//# sourceMappingURL=CloudinitModal.js.map