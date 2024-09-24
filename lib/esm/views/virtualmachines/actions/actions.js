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
import VirtualMachineInstanceMigrationModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceMigrationModel';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { consoleFetch, k8sCreate, k8sDelete, } from '@openshift-console/dynamic-plugin-sdk';
var generateRandomString = function () { return Math.random().toString(36).substring(2, 7); };
export var VMActionType;
(function (VMActionType) {
    VMActionType["AddVolume"] = "addvolume";
    VMActionType["Pause"] = "pause";
    VMActionType["RemoveVolume"] = "removevolume";
    VMActionType["Restart"] = "restart";
    VMActionType["Start"] = "start";
    VMActionType["Stop"] = "stop";
    VMActionType["Unpause"] = "unpause";
})(VMActionType || (VMActionType = {}));
export var VMActionRequest = function (vm, action, model, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, namespace, url, response, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = vm.metadata, name = _a.name, namespace = _a.namespace;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                url = "/api/kubernetes/apis/subresources.".concat(model.apiGroup, "/").concat(model.apiVersion, "/namespaces/").concat(namespace, "/").concat(model.plural, "/").concat(name, "/").concat(action);
                return [4 /*yield*/, consoleFetch(url, {
                        body: body ? JSON.stringify(body) : undefined,
                        method: 'PUT',
                    })];
            case 2:
                response = _b.sent();
                return [2 /*return*/, response.text()];
            case 3:
                error_1 = _b.sent();
                kubevirtConsole.error(error_1);
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
export var startVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.Start, VirtualMachineModel)];
}); }); };
export var stopVM = function (vm, body) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.Stop, VirtualMachineModel, body)];
}); }); };
export var restartVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.Restart, VirtualMachineModel)];
}); }); };
export var pauseVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.Pause, VirtualMachineInstanceModel)];
}); }); };
export var unpauseVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.Unpause, VirtualMachineInstanceModel)];
}); }); };
export var addPersistentVolume = function (vm, body) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.AddVolume, VirtualMachineModel, body)];
}); }); };
export var removeVolume = function (vm, body) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, VMActionRequest(vm, VMActionType.RemoveVolume, VirtualMachineModel, body)];
}); }); };
export var migrateVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, namespace, migrationData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = vm === null || vm === void 0 ? void 0 : vm.metadata, name = _a.name, namespace = _a.namespace;
                migrationData = {
                    apiVersion: 'kubevirt.io/v1',
                    kind: 'VirtualMachineInstanceMigration',
                    metadata: {
                        name: "".concat(name, "-migration-").concat(generateRandomString()),
                    },
                    spec: {
                        vmiName: name,
                    },
                };
                return [4 /*yield*/, k8sCreate({
                        data: migrationData,
                        model: VirtualMachineInstanceMigrationModel,
                        ns: namespace,
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
export var cancelMigration = function (vmim) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, k8sDelete({
                    model: VirtualMachineInstanceMigrationModel,
                    resource: vmim,
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var deleteVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, k8sDelete({
                    model: VirtualMachineModel,
                    resource: vm,
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=actions.js.map