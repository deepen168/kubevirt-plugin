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
import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { ensurePath, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sGet } from '@openshift-console/dynamic-plugin-sdk';
import { DEFAULT_WINDOWS_DRIVERS_DISK_IMAGE, VIRTIO_WIN_CONFIG_MAP_NAME, VIRTIO_WIN_CONFIG_MAP_NAMESPACES, VIRTIO_WIN_IMAGE, WINDOWS_DRIVERS_DISK, } from './constants';
var getVirtioWinConfigMap = function () { return __awaiter(void 0, void 0, void 0, function () {
    var lastException, _i, VIRTIO_WIN_CONFIG_MAP_NAMESPACES_1, namespace, configMap, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                lastException = undefined;
                _i = 0, VIRTIO_WIN_CONFIG_MAP_NAMESPACES_1 = VIRTIO_WIN_CONFIG_MAP_NAMESPACES;
                _a.label = 1;
            case 1:
                if (!(_i < VIRTIO_WIN_CONFIG_MAP_NAMESPACES_1.length)) return [3 /*break*/, 6];
                namespace = VIRTIO_WIN_CONFIG_MAP_NAMESPACES_1[_i];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, k8sGet({
                        model: ConfigMapModel,
                        name: VIRTIO_WIN_CONFIG_MAP_NAME,
                        ns: namespace,
                    })];
            case 3:
                configMap = _a.sent();
                if (configMap) {
                    return [2 /*return*/, configMap];
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                kubevirtConsole.error("The ".concat(VIRTIO_WIN_CONFIG_MAP_NAME, " can not be found in the ").concat(namespace, " namespace.  Another namespace will be queried, if any left. Error: "), e_1);
                lastException = e_1;
                return [3 /*break*/, 5];
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: throw lastException;
        }
    });
}); };
export var getDriversImage = function () { return __awaiter(void 0, void 0, void 0, function () {
    var driversImage, configMap, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                driversImage = DEFAULT_WINDOWS_DRIVERS_DISK_IMAGE;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getVirtioWinConfigMap()];
            case 2:
                configMap = _b.sent();
                if ((_a = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _a === void 0 ? void 0 : _a[VIRTIO_WIN_IMAGE])
                    return [2 /*return*/, configMap.data[VIRTIO_WIN_IMAGE]];
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                kubevirtConsole.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, driversImage];
        }
    });
}); };
export var mountWinDriversToVM = function (vm) { return __awaiter(void 0, void 0, void 0, function () {
    var driversImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getDriversImage()];
            case 1:
                driversImage = _a.sent();
                return [2 /*return*/, produce(vm, function (draftVM) {
                        ensurePath(draftVM, ['spec.template.spec.domain.devices']);
                        if (!draftVM.spec.template.spec.domain.devices.disks)
                            draftVM.spec.template.spec.domain.devices.disks = [];
                        if (!draftVM.spec.template.spec.volumes)
                            draftVM.spec.template.spec.volumes = [];
                        draftVM.spec.template.spec.domain.devices.disks.push({
                            cdrom: {
                                bus: InterfaceTypes.SATA,
                            },
                            name: WINDOWS_DRIVERS_DISK,
                        });
                        draftVM.spec.template.spec.volumes.push({
                            containerDisk: {
                                image: driversImage,
                            },
                            name: WINDOWS_DRIVERS_DISK,
                        });
                    })];
        }
    });
}); };
//# sourceMappingURL=drivers.js.map