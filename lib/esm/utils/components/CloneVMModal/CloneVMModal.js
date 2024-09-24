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
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { MAX_K8S_NAME_LENGTH } from '@kubevirt-utils/utils/constants';
import { getRandomChars } from '@kubevirt-utils/utils/utils';
import { Form, ModalVariant } from '@patternfly/react-core';
import CloningStatus from './components/CloningStatus';
import ConfigurationSummary from './components/ConfigurationSummary';
import NameInput from './components/NameInput';
import SnapshotContentConfigurationSummary from './components/SnapshotContentConfigurationSummary';
import StartClonedVMCheckbox from './components/StartClonedVMCheckbox/StartClonedVMCheckbox';
import useCloneVMModal from './hooks/useCloneVMModal';
import { CLONING_STATUSES } from './utils/constants';
import { cloneVM, isVM, runVM, vmExist } from './utils/helpers';
var CloneVMModal = function (_a) {
    var _b, _c, _d, _e;
    var headerText = _a.headerText, isOpen = _a.isOpen, onClose = _a.onClose, source = _a.source;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var namespace = (_b = source === null || source === void 0 ? void 0 : source.metadata) === null || _b === void 0 ? void 0 : _b.namespace;
    var _f = useState("".concat((_c = source === null || source === void 0 ? void 0 : source.metadata) === null || _c === void 0 ? void 0 : _c.name, "-").concat(isVM(source) && 'clone-').concat(getRandomChars()).substring(0, MAX_K8S_NAME_LENGTH)), cloneName = _f[0], setCloneName = _f[1];
    var _g = useState(false), startCloneVM = _g[0], setStartCloneVM = _g[1];
    var _h = useState(), initialCloneRequest = _h[0], setInitialCloneRequest = _h[1];
    var sendCloneRequest = function () { return __awaiter(void 0, void 0, void 0, function () {
        var vmSameName, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vmExist(cloneName, namespace)];
                case 1:
                    vmSameName = _a.sent();
                    if (vmSameName) {
                        throw new Error(t('VirtualMachine with this name already exists'));
                    }
                    return [4 /*yield*/, cloneVM(source, cloneName, namespace)];
                case 2:
                    request = _a.sent();
                    setInitialCloneRequest(request);
                    return [2 /*return*/];
            }
        });
    }); };
    var cloneRequest = useCloneVMModal((_d = initialCloneRequest === null || initialCloneRequest === void 0 ? void 0 : initialCloneRequest.metadata) === null || _d === void 0 ? void 0 : _d.name, (_e = initialCloneRequest === null || initialCloneRequest === void 0 ? void 0 : initialCloneRequest.metadata) === null || _e === void 0 ? void 0 : _e.namespace);
    useEffect(function () {
        var _a;
        if (((_a = cloneRequest === null || cloneRequest === void 0 ? void 0 : cloneRequest.status) === null || _a === void 0 ? void 0 : _a.phase) === CLONING_STATUSES.SUCCEEDED) {
            startCloneVM && runVM(cloneName, namespace);
            navigate("/k8s/ns/".concat(namespace, "/").concat(VirtualMachineModelRef, "/").concat(cloneName));
            onClose();
        }
    }, [cloneRequest, startCloneVM, cloneName, namespace, onClose, navigate]);
    return (React.createElement(TabModal, { closeOnSubmit: false, headerText: headerText !== null && headerText !== void 0 ? headerText : t('Clone {{sourceKind}}', { sourceKind: source.kind }), isDisabled: Boolean(initialCloneRequest), isLoading: Boolean(initialCloneRequest), isOpen: isOpen, modalVariant: ModalVariant.large, obj: source, onClose: onClose, onSubmit: sendCloneRequest, submitBtnText: isVM(source) ? t('Clone') : t('Create') },
        React.createElement(Form, { className: "pf-u-w-75-on-md pf-u-w-66-on-lg pf-u-m-auto", isHorizontal: true },
            React.createElement(NameInput, { name: cloneName, setName: setCloneName }),
            React.createElement(StartClonedVMCheckbox, { setStartCloneVM: setStartCloneVM, startCloneVM: startCloneVM }),
            isVM(source) ? (React.createElement(ConfigurationSummary, { vm: source })) : (React.createElement(SnapshotContentConfigurationSummary, { snapshot: source })),
            React.createElement(CloningStatus, { vmCloneRequest: cloneRequest || initialCloneRequest }))));
};
export default CloneVMModal;
//# sourceMappingURL=CloneVMModal.js.map