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
import React, { useMemo, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty, validateSSHPublicKey } from '@kubevirt-utils/utils/utils';
import MutedTextSpan from '../MutedTextSpan/MutedTextSpan';
import TabModal from '../TabModal/TabModal';
import SSHSecretModalBody from './components/SSHSecretModalBody/SSHSecretModalBody';
import useSecretsData from './hooks/useSecretsData';
import { SecretSelectionOption } from './utils/types';
import { createSSHSecret, validateSecretNameLength, validateSecretNameUnique } from './utils/utils';
var SSHSecretModal = function (_a) {
    var initialSSHSecretDetails = _a.initialSSHSecretDetails, isOpen = _a.isOpen, _b = _a.isTemplate, isTemplate = _b === void 0 ? false : _b, _c = _a.isUserTab, isUserTab = _c === void 0 ? false : _c, namespace = _a.namespace, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var _d = useState(initialSSHSecretDetails), sshDetails = _d[0], setSSHDetails = _d[1];
    var _e = useState(namespace), localNSProject = _e[0], setLocalNSProject = _e[1];
    var secretsData = useSecretsData(localNSProject, namespace);
    var isDisabled = useMemo(function () {
        var allSecrets = secretsData.allSecrets, secretsLoaded = secretsData.secretsLoaded;
        var secretOption = sshDetails.secretOption, sshPubKey = sshDetails.sshPubKey, sshSecretName = sshDetails.sshSecretName;
        return (!secretsLoaded ||
            (secretOption === SecretSelectionOption.useExisting && isEmpty(sshSecretName)) ||
            (secretOption === SecretSelectionOption.addNew &&
                (isEmpty(sshPubKey) ||
                    isEmpty(sshSecretName) ||
                    !validateSSHPublicKey(sshPubKey) ||
                    !validateSecretNameUnique(sshSecretName, localNSProject, allSecrets) ||
                    !validateSecretNameLength(sshSecretName))));
    }, [localNSProject, secretsData, sshDetails]);
    return (React.createElement(TabModal, { onSubmit: function () { return __awaiter(void 0, void 0, void 0, function () {
            var secretOption, sshPubKey, sshSecretName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secretOption = sshDetails.secretOption, sshPubKey = sshDetails.sshPubKey, sshSecretName = sshDetails.sshSecretName;
                        if (!(secretOption === SecretSelectionOption.addNew)) return [3 /*break*/, 2];
                        return [4 /*yield*/, createSSHSecret(sshPubKey, sshSecretName, namespace, true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, onSubmit(sshDetails)];
                }
            });
        }); }, headerText: t('Public SSH key'), isDisabled: isDisabled, isOpen: isOpen, onClose: onClose },
        React.createElement(MutedTextSpan, { text: t('SSH key is saved in the project as a secret') }),
        React.createElement(SSHSecretModalBody, { isTemplate: isTemplate, isUserTab: isUserTab, localNSProject: localNSProject, namespace: namespace, secretsData: secretsData, setLocalNSProject: setLocalNSProject, setSSHDetails: setSSHDetails, sshDetails: sshDetails })));
};
export default SSHSecretModal;
//# sourceMappingURL=SSHSecretModal.js.map