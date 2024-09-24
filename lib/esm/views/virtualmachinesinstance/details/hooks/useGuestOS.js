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
import * as React from 'react';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import { isGuestAgentConnected, vmiStatuses } from '@kubevirt-utils/resources/vmi';
import { consoleFetch } from '@openshift-console/dynamic-plugin-sdk';
var useGuestOS = function (vmi) {
    var _a = React.useState(false), loaded = _a[0], setLoaded = _a[1];
    var _b = React.useState({}), data = _b[0], setData = _b[1];
    var _c = React.useState(null), error = _c[0], setError = _c[1];
    var isGuestAgent = isGuestAgentConnected(vmi);
    React.useEffect(function () {
        var _a, _b, _c;
        setError(null);
        var namespace = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
        var name = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.name;
        if (((_c = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _c === void 0 ? void 0 : _c.phase) === vmiStatuses.Running && isGuestAgent) {
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, jsonData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, consoleFetch("api/kubernetes/apis/subresources.".concat(VirtualMachineInstanceModel.apiGroup, "/").concat(VirtualMachineInstanceModel.apiVersion, "/namespaces/").concat(namespace, "/").concat(VirtualMachineInstanceModel.plural, "/").concat(name, "/guestosinfo"))];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            jsonData = _a.sent();
                            setData(jsonData);
                            setLoaded(true);
                            setError(null);
                            return [2 /*return*/];
                    }
                });
            }); })().catch(function (err) {
                setError(err);
                setLoaded(true);
            });
        }
        else {
            setLoaded(true);
        }
    }, [vmi, isGuestAgent]);
    return [data, loaded, error, isGuestAgent];
};
export default useGuestOS;
//# sourceMappingURL=useGuestOS.js.map