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
import produce from 'immer';
import { ServiceModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getCloudInitCredentials } from '@kubevirt-utils/resources/vmi';
import { ensurePath, getRandomChars, isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sDelete, k8sUpdate, } from '@openshift-console/dynamic-plugin-sdk';
import { buildOwnerReference, getName, getNamespace } from './../../resources/shared';
import { PORT, SSH_PORT, VMI_LABEL_AS_SSH_SERVICE_SELECTOR } from './constants';
var buildSSHServiceFromVM = function (vm, type, sshLabel) {
    var _a;
    var _b, _c;
    return ({
        apiVersion: ServiceModel.apiVersion,
        kind: ServiceModel.kind,
        metadata: {
            // max name length is 63 characters
            name: "".concat((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name, "-").concat(type.toLowerCase(), "-ssh-service")
                .substring(0, 56)
                .concat("-".concat(getRandomChars(4))),
            namespace: (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
            ownerReferences: [buildOwnerReference(vm, { blockOwnerDeletion: false })],
        },
        spec: {
            ports: [
                {
                    port: PORT,
                    targetPort: SSH_PORT,
                },
            ],
            selector: (_a = {},
                _a[VMI_LABEL_AS_SSH_SERVICE_SELECTOR] = sshLabel,
                _a),
            type: type,
        },
    });
};
export var deleteSSHService = function (sshService) {
    var _a, _b;
    return k8sDelete({
        model: ServiceModel,
        name: (_a = sshService === null || sshService === void 0 ? void 0 : sshService.metadata) === null || _a === void 0 ? void 0 : _a.name,
        ns: (_b = sshService === null || sshService === void 0 ? void 0 : sshService.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        resource: sshService,
    });
};
export var addSSHSelectorLabelToVM = function (vm, vmi, labelValue) { return __awaiter(void 0, void 0, void 0, function () {
    var vmWithLabel, vmiWithLabel;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                vmWithLabel = produce(vm, function (draftVM) {
                    ensurePath(draftVM, 'spec.template.metadata.labels');
                    draftVM.spec.template.metadata.labels[VMI_LABEL_AS_SSH_SERVICE_SELECTOR] = labelValue;
                });
                if (!vmi) return [3 /*break*/, 2];
                vmiWithLabel = produce(vmi, function (draftVMI) {
                    ensurePath(draftVMI, 'metadata.labels');
                    draftVMI.metadata.labels[VMI_LABEL_AS_SSH_SERVICE_SELECTOR] = labelValue;
                });
                return [4 /*yield*/, k8sUpdate({
                        data: vmiWithLabel,
                        model: VirtualMachineInstanceModel,
                        name: (_a = vmiWithLabel === null || vmiWithLabel === void 0 ? void 0 : vmiWithLabel.metadata) === null || _a === void 0 ? void 0 : _a.name,
                        ns: (_b = vmiWithLabel === null || vmiWithLabel === void 0 ? void 0 : vmiWithLabel.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
                    })];
            case 1:
                _e.sent();
                _e.label = 2;
            case 2: return [2 /*return*/, k8sUpdate({
                    data: vmWithLabel,
                    model: VirtualMachineModel,
                    name: (_c = vmWithLabel === null || vmWithLabel === void 0 ? void 0 : vmWithLabel.metadata) === null || _c === void 0 ? void 0 : _c.name,
                    ns: (_d = vmWithLabel === null || vmWithLabel === void 0 ? void 0 : vmWithLabel.metadata) === null || _d === void 0 ? void 0 : _d.namespace,
                })];
        }
    });
}); };
export var createSSHService = function (vm, type, vmi) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, namespace, vmiLabels, labelSelector, serviceResource;
    var _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = (vm === null || vm === void 0 ? void 0 : vm.metadata) || {}, name = _a.name, namespace = _a.namespace;
                vmiLabels = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.labels;
                labelSelector = (vmiLabels === null || vmiLabels === void 0 ? void 0 : vmiLabels[VMI_LABEL_AS_SSH_SERVICE_SELECTOR]) || "".concat(name, "-").concat(getRandomChars());
                if (!!(vmiLabels === null || vmiLabels === void 0 ? void 0 : vmiLabels[VMI_LABEL_AS_SSH_SERVICE_SELECTOR])) return [3 /*break*/, 2];
                return [4 /*yield*/, addSSHSelectorLabelToVM(vm, vmi, labelSelector)];
            case 1:
                _e.sent();
                _e.label = 2;
            case 2:
                serviceResource = buildSSHServiceFromVM(vm, type, labelSelector);
                return [2 /*return*/, k8sCreate({
                        data: serviceResource,
                        model: ServiceModel,
                        ns: namespace,
                    })];
        }
    });
}); };
export var getConsoleVirtctlCommand = function (vm, identityFlag) {
    var _a, _b, _c;
    var _d = [
        getName(vm),
        getNamespace(vm),
        (_c = (_b = (_a = getCloudInitCredentials(vm)) === null || _a === void 0 ? void 0 : _a.users) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.name,
    ], vmName = _d[0], vmNamespace = _d[1], userName = _d[2];
    return "virtctl -n ".concat(vmNamespace, " ssh ").concat(userName, "@").concat(vmName, " ").concat(!isEmpty(identityFlag) ? identityFlag : '--identity-file=<path_to_sshkey>');
};
//# sourceMappingURL=utils.js.map