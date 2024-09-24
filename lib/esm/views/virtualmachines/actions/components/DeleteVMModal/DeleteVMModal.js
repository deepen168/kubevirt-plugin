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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import VirtualMachineModel, { VirtualMachineModelRef, } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import { GracePeriodInput } from '@kubevirt-utils/components/GracePeriodInput/GracePeriodInput';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useLastNamespacePath } from '@kubevirt-utils/hooks/useLastNamespacePath';
import { buildOwnerReference } from '@kubevirt-utils/resources/shared';
import { k8sDelete } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant, Stack, StackItem } from '@patternfly/react-core';
import DeleteOwnedResourcesMessage from './components/DeleteOwnedResourcesMessage';
import useDeleteVMResources from './hooks/useDeleteVMResources';
import { removeDataVolumeTemplatesToVM, updateVolumeResources } from './utils/helpers';
import { DEFAULT_GRACE_PERIOD } from './constants';
var DeleteVMModal = function (_a) {
    var _b, _c, _d;
    var isOpen = _a.isOpen, onClose = _a.onClose, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var _e = useState(false), gracePeriodCheckbox = _e[0], setGracePeriodCheckbox = _e[1];
    var _f = useState(((_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.terminationGracePeriodSeconds) || DEFAULT_GRACE_PERIOD), gracePeriodSeconds = _f[0], setGracePeriodSeconds = _f[1];
    var _g = useState([]), volumesToSave = _g[0], setVolumesToSave = _g[1];
    var _h = useDeleteVMResources(vm), dataVolumes = _h.dataVolumes, loaded = _h.loaded, pvcs = _h.pvcs, snapshots = _h.snapshots;
    var lastNamespacePath = useLastNamespacePath();
    var onDelete = function (updatedVM) { return __awaiter(void 0, void 0, void 0, function () {
        var vmOwnerRef;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    vmOwnerRef = buildOwnerReference(updatedVM);
                    return [4 /*yield*/, removeDataVolumeTemplatesToVM(vm, volumesToSave.filter(function (volume) { return volume.kind === DataVolumeModel.kind; }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Promise.allSettled(updateVolumeResources(volumesToSave, vmOwnerRef))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, k8sDelete({
                            json: gracePeriodCheckbox
                                ? { apiVersion: 'v1', gracePeriodSeconds: gracePeriodSeconds, kind: 'DeleteOptions' }
                                : null,
                            model: VirtualMachineModel,
                            resource: updatedVM,
                        })];
                case 3:
                    _a.sent();
                    navigate("/k8s/".concat(lastNamespacePath, "/").concat(VirtualMachineModelRef));
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(TabModal, { headerText: t('Delete VirtualMachine?'), isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: onDelete, submitBtnText: t('Delete'), submitBtnVariant: ButtonVariant.danger },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(ConfirmActionMessage, { obj: vm })),
            React.createElement(GracePeriodInput, { gracePeriodSeconds: gracePeriodSeconds, isChecked: gracePeriodCheckbox, onCheckboxChange: setGracePeriodCheckbox, setGracePeriodSeconds: setGracePeriodSeconds }),
            React.createElement(DeleteOwnedResourcesMessage, { dataVolumes: dataVolumes, loaded: loaded, pvcs: pvcs, setVolumesToSave: setVolumesToSave, snapshots: snapshots, volumesToSave: volumesToSave }))));
};
export default DeleteVMModal;
//# sourceMappingURL=DeleteVMModal.js.map