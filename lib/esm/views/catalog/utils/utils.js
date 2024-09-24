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
import produce from 'immer';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { SecretModel } from '@kubevirt-utils/models';
import { buildOwnerReference } from '@kubevirt-utils/resources/shared';
import { getTemplateOS, OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { getGroupVersionKindForResource, k8sCreate, k8sDelete, } from '@openshift-console/dynamic-plugin-sdk';
/**
 * create multiple resources from a list of dynamic objects
 * @param resources - resources to create
 * @param models - k8s models
 * @param namespace - namespace to create resources in
 * @returns promise of created resources
 */
export var createMultipleResources = function (resources, models, namespace) { return __awaiter(void 0, void 0, void 0, function () {
    var vm, otherResources, vmCreated, otherResourcesCreated, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                vm = resources.find(function (object) { return object.kind === VirtualMachineModel.kind; });
                otherResources = resources.filter(function (object) {
                    return object.kind !== VirtualMachineModel.kind ||
                        object.metadata.name !== vm.metadata.name ||
                        object.metadata.namespace !== vm.metadata.namespace;
                });
                return [4 /*yield*/, k8sCreate({
                        data: vm,
                        model: VirtualMachineModel,
                    })];
            case 1:
                vmCreated = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 6]);
                return [4 /*yield*/, Promise.all(otherResources.map(function (resource) {
                        var _a = getGroupVersionKindForResource(resource), group = _a.group, kind = _a.kind, version = _a.version;
                        var ref = [group || 'core', version, kind].join('~');
                        var model = models[ref] || models[resource.kind];
                        return k8sCreate({
                            data: produce(resource, function (draftObject) {
                                ensurePath(draftObject, 'metadata');
                                if (!draftObject.metadata.namespace && namespace) {
                                    draftObject.metadata.namespace = namespace;
                                }
                                if (kind !== SecretModel.kind) {
                                    if (!draftObject.metadata.ownerReferences) {
                                        draftObject.metadata.ownerReferences = [];
                                    }
                                    draftObject.metadata.ownerReferences.push(buildOwnerReference(vmCreated, { blockOwnerDeletion: false }));
                                }
                            }),
                            model: model,
                        });
                    }))];
            case 3:
                otherResourcesCreated = _a.sent();
                return [2 /*return*/, __spreadArray([vmCreated], (otherResourcesCreated || []), true)];
            case 4:
                error_1 = _a.sent();
                return [4 /*yield*/, k8sDelete({
                        model: VirtualMachineModel,
                        resource: vm,
                    })];
            case 5:
                _a.sent();
                throw error_1;
            case 6: return [2 /*return*/];
        }
    });
}); };
export var isRHELTemplate = function (template) {
    return getTemplateOS(template) === OS_NAME_TYPES.rhel;
};
//# sourceMappingURL=utils.js.map