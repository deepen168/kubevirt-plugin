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
import { useEffect, useMemo, useRef, useState } from 'react';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import { BOOT_SOURCE } from '../../utils/constants';
import { getDataSource, getPVC, getTemplateBootSourceType } from './utils';
/**
 * A Hook that returns the boot source status of a given template
 * @param {V1Template} template - template to check
 * @returns the boot source and its status
 */
export var useVMTemplateSource = function (template) {
    var _a = useState(undefined), templateBootSource = _a[0], setTemplateBootSource = _a[1];
    var _b = useState(false), isBootSourceAvailable = _b[0], setIsBootSourceAvailable = _b[1];
    var _c = useState(false), loaded = _c[0], setLoaded = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var prevBootSourceRef = useRef();
    var bootSource = useMemo(function () { return getTemplateBootSourceType(template); }, [template]);
    var getPVCSource = function (_a) {
        var name = _a.name, namespace = _a.namespace;
        return __awaiter(void 0, void 0, void 0, function () {
            var pvc, e_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setLoaded(false);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getPVC(name, namespace)];
                    case 2:
                        pvc = (_c.sent());
                        if (pvc) {
                            setIsBootSourceAvailable(true);
                            setTemplateBootSource({
                                source: {
                                    pvc: {
                                        name: name,
                                        namespace: namespace,
                                    },
                                },
                                sourceValue: { pvc: pvc },
                                storageClassName: (_b = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _b === void 0 ? void 0 : _b.storageClassName,
                                type: BOOT_SOURCE.PVC,
                            });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        setError(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        setLoaded(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    var getDataSourceCondition = function (_a) {
        var name = _a.name, namespace = _a.namespace;
        return __awaiter(void 0, void 0, void 0, function () {
            var dataSource, pvc, e_2;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        setLoaded(false);
                        _o.label = 1;
                    case 1:
                        _o.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, getDataSource(name, namespace)];
                    case 2:
                        dataSource = _o.sent();
                        if (!((_c = (_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _b === void 0 ? void 0 : _b.conditions) === null || _c === void 0 ? void 0 : _c.find(function (c) { return (c === null || c === void 0 ? void 0 : c.type) === 'Ready' && (c === null || c === void 0 ? void 0 : c.status) === 'True'; }))) return [3 /*break*/, 4];
                        setIsBootSourceAvailable(true);
                        return [4 /*yield*/, getPVC((_f = (_e = (_d = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e.pvc) === null || _f === void 0 ? void 0 : _f.name, (_j = (_h = (_g = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _g === void 0 ? void 0 : _g.source) === null || _h === void 0 ? void 0 : _h.pvc) === null || _j === void 0 ? void 0 : _j.namespace)];
                    case 3:
                        pvc = _o.sent();
                        setTemplateBootSource({
                            source: {
                                pvc: (_l = (_k = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _k === void 0 ? void 0 : _k.source) === null || _l === void 0 ? void 0 : _l.pvc,
                            },
                            storageClassName: (_m = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _m === void 0 ? void 0 : _m.storageClassName,
                            type: BOOT_SOURCE.DATA_SOURCE,
                        });
                        _o.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_2 = _o.sent();
                        setError(e_2);
                        return [3 /*break*/, 6];
                    case 6:
                        setLoaded(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    useEffect(function () {
        var _a, _b, _c, _d, _e;
        if (isEqualObject(prevBootSourceRef === null || prevBootSourceRef === void 0 ? void 0 : prevBootSourceRef.current, bootSource))
            return;
        setError(undefined);
        setTemplateBootSource(undefined);
        setIsBootSourceAvailable(false);
        switch (bootSource === null || bootSource === void 0 ? void 0 : bootSource.type) {
            case BOOT_SOURCE.PVC:
                getPVCSource((_a = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _a === void 0 ? void 0 : _a.pvc);
                break;
            case BOOT_SOURCE.DATA_SOURCE:
                getDataSourceCondition((_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.sourceRef);
                break;
            case BOOT_SOURCE.URL:
                {
                    setTemplateBootSource({
                        source: bootSource.source,
                        sourceValue: {
                            http: (_c = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _c === void 0 ? void 0 : _c.http,
                        },
                        type: bootSource.type,
                    });
                    setIsBootSourceAvailable(true);
                    setLoaded(true);
                }
                break;
            case BOOT_SOURCE.REGISTRY:
                {
                    setTemplateBootSource({
                        source: bootSource.source,
                        sourceValue: {
                            registry: (_d = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _d === void 0 ? void 0 : _d.registry,
                        },
                        type: bootSource.type,
                    });
                    setIsBootSourceAvailable(true);
                    setLoaded(true);
                }
                break;
            case BOOT_SOURCE.CONTAINER_DISK:
                {
                    setTemplateBootSource({
                        source: bootSource.source,
                        sourceValue: {
                            containerDisk: (_e = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _e === void 0 ? void 0 : _e.containerDisk,
                        },
                        type: bootSource.type,
                    });
                    setIsBootSourceAvailable(true);
                    setLoaded(true);
                }
                break;
            default:
                setIsBootSourceAvailable(false);
                setLoaded(true);
                break;
        }
        prevBootSourceRef.current = bootSource;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootSource]);
    return {
        error: error,
        isBootSourceAvailable: isBootSourceAvailable,
        loaded: loaded,
        templateBootSource: templateBootSource,
    };
};
//# sourceMappingURL=useVMTemplateSource.js.map