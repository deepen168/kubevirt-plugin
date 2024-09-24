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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useCallback, useMemo, useState } from 'react';
import { Trans } from 'react-i18next';
import { useWizardVMContext } from '@catalog/utils/WizardVMContext';
import { WizardDescriptionItem } from '@catalog/wizard/components/WizardDescriptionItem';
import LinuxLabel from '@kubevirt-utils/components/Labels/LinuxLabel';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import SecretNameLabel from '@kubevirt-utils/components/SSHSecretModal/components/SecretNameLabel';
import SSHSecretModal from '@kubevirt-utils/components/SSHSecretModal/SSHSecretModal';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { addSecretToVM, removeSecretToVM, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { SecretModel } from '@kubevirt-utils/models';
import { getInitialSSHDetails } from '@kubevirt-utils/resources/secret/utils';
import { getNamespace } from '@kubevirt-utils/resources/shared';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Stack, Text, TextVariants } from '@patternfly/react-core';
import { removeSSHKeyObject, updateSSHKeyObject } from './sshkey-utils';
var SSHKey = function () {
    var _a;
    var t = useKubevirtTranslation().t;
    var _b = useWizardVMContext(), tabsData = _b.tabsData, updateTabsData = _b.updateTabsData, updateVM = _b.updateVM, vm = _b.vm;
    var createModal = useModal().createModal;
    var vmAttachedSecretName = useMemo(function () { return getVMSSHSecretName(vm); }, [vm]);
    var _c = useState(getInitialSSHDetails({
        applyKeyToProject: tabsData.applySSHToSettings,
        secretToCreate: (_a = tabsData.additionalObjects) === null || _a === void 0 ? void 0 : _a.find(function (obj) { return (obj === null || obj === void 0 ? void 0 : obj.kind) === SecretModel.kind; }),
        sshSecretName: vmAttachedSecretName,
    })), sshDetails = _c[0], setSSHDetails = _c[1];
    var onSubmit = useCallback(function (details) { return __awaiter(void 0, void 0, void 0, function () {
        var applyKeyToProject, secretOption, sshPubKey, sshSecretName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    applyKeyToProject = details.applyKeyToProject, secretOption = details.secretOption, sshPubKey = details.sshPubKey, sshSecretName = details.sshSecretName;
                    if (isEqualObject(details, sshDetails)) {
                        return [2 /*return*/];
                    }
                    removeSSHKeyObject(updateTabsData, sshDetails.sshSecretName);
                    updateTabsData(function (currentTabsData) {
                        currentTabsData.authorizedSSHKey = sshSecretName;
                        currentTabsData.applySSHToSettings = applyKeyToProject;
                    });
                    if (!(secretOption === SecretSelectionOption.none &&
                        sshDetails.secretOption !== SecretSelectionOption.none)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateVM(removeSecretToVM(vm))];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(secretOption === SecretSelectionOption.useExisting &&
                        sshDetails.sshSecretName !== sshSecretName &&
                        !isEmpty(sshSecretName))) return [3 /*break*/, 4];
                    return [4 /*yield*/, updateVM(addSecretToVM(vm, sshSecretName))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(secretOption === SecretSelectionOption.addNew &&
                        !isEmpty(sshPubKey) &&
                        !isEmpty(sshSecretName))) return [3 /*break*/, 6];
                    updateSSHKeyObject(vm, updateTabsData, sshPubKey, sshSecretName);
                    return [4 /*yield*/, updateVM(addSecretToVM(vm, sshSecretName))];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    setSSHDetails(details);
                    return [2 /*return*/, Promise.resolve()];
            }
        });
    }); }, [sshDetails, updateTabsData, updateVM, vm]);
    return (React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, { hasGutter: true },
            React.createElement("div", { "data-test": "ssh-popover" },
                React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                    React.createElement(Text, { component: TextVariants.p }, "Store the key in a project secret."),
                    React.createElement(Text, { component: TextVariants.p }, "The key will be stored after the machine is created"))),
            React.createElement(SecretNameLabel, { secretName: vmAttachedSecretName })), onEditClick: function () {
            return createModal(function (modalProps) { return (React.createElement(SSHSecretModal, __assign({}, modalProps, { initialSSHSecretDetails: sshDetails, namespace: getNamespace(vm), onSubmit: onSubmit }))); });
        }, isEdit: true, label: React.createElement(LinuxLabel, null), showEditOnTitle: true, testId: "wizard-sshkey", title: t('Public SSH key') }));
};
export default SSHKey;
//# sourceMappingURL=SSHKey.js.map