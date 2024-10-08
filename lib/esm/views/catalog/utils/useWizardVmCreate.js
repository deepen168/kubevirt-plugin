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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from 'react';
import produce from 'immer';
import { logTemplateFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { CUSTOMIZE_VM_FAILED, CUSTOMIZE_VM_SUCCEEDED, } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { addUploadDataVolumeOwnerReference } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { getName } from '@kubevirt-utils/resources/shared';
import { HEADLESS_SERVICE_LABEL, HEADLESS_SERVICE_NAME, } from '@kubevirt-utils/utils/headless-service';
import { useK8sModels } from '@openshift-console/dynamic-plugin-sdk';
import { getLabels } from '../../clusteroverview/OverviewTab/inventory-card/utils/flattenTemplates';
import { createMultipleResources } from './utils';
import { useWizardVMContext } from './WizardVMContext';
export var useWizardVmCreate = function () {
    var _a = useWizardVMContext(), tabsData = _a.tabsData, vm = _a.vm;
    var models = useK8sModels()[0];
    var _b = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _b[0], updateAuthorizedSSHKeys = _b[1];
    var _c = useState(true), loaded = _c[0], setLoaded = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var createVM = function (_a) {
        var isDisableGuestSystemAccessLog = _a.isDisableGuestSystemAccessLog, onFullfilled = _a.onFullfilled;
        return __awaiter(void 0, void 0, void 0, function () {
            var vmToCreate, createdObjects, newVM_1, e_1;
            var _b;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 4, , 5]);
                        setLoaded(false);
                        setError(undefined);
                        vmToCreate = produce(vm, function (vmDraft) {
                            if (isDisableGuestSystemAccessLog) {
                                var devices = vmDraft.spec.template.spec.domain.devices;
                                devices.logSerialConsole = false;
                                vmDraft.spec.template.spec.domain.devices = devices;
                            }
                            if (!getLabels(vmDraft.spec.template))
                                vmDraft.spec.template.metadata.labels = {};
                            vmDraft.spec.template.metadata.labels[HEADLESS_SERVICE_LABEL] = HEADLESS_SERVICE_NAME;
                        });
                        return [4 /*yield*/, createMultipleResources(__spreadArray([vmToCreate], tabsData === null || tabsData === void 0 ? void 0 : tabsData.additionalObjects, true), models, vmToCreate.metadata.namespace)];
                    case 1:
                        createdObjects = _f.sent();
                        newVM_1 = createdObjects[0];
                        if (!(((_d = (_c = tabsData === null || tabsData === void 0 ? void 0 : tabsData.disks) === null || _c === void 0 ? void 0 : _c.dataVolumesToAddOwnerRef) === null || _d === void 0 ? void 0 : _d.length) > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all((_e = tabsData === null || tabsData === void 0 ? void 0 : tabsData.disks) === null || _e === void 0 ? void 0 : _e.dataVolumesToAddOwnerRef.map(function (dv) {
                                return addUploadDataVolumeOwnerReference(newVM_1, dv);
                            }))];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3:
                        if (tabsData.authorizedSSHKey && tabsData.applySSHToSettings) {
                            updateAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_b = {}, _b[newVM_1.metadata.namespace] = tabsData.authorizedSSHKey, _b)));
                        }
                        setLoaded(true);
                        onFullfilled(newVM_1);
                        logTemplateFlowEvent(CUSTOMIZE_VM_SUCCEEDED, null, {
                            vmName: getName(vm),
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _f.sent();
                        setLoaded(true);
                        setError(e_1);
                        logTemplateFlowEvent(CUSTOMIZE_VM_FAILED, null, {
                            vmName: getName(vm),
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return {
        createVM: createVM,
        error: error,
        loaded: loaded,
    };
};
//# sourceMappingURL=useWizardVmCreate.js.map