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
import { useState } from 'react';
import produce from 'immer';
import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import { AUTOMATIC_SUBSCRIPTION_ACTIVATION_KEY, AUTOMATIC_SUBSCRIPTION_CUSTOM_URL, AUTOMATIC_SUBSCRIPTION_ORGANIZATION_ID, AUTOMATIC_SUBSCRIPTION_TYPE_KEY, } from '@kubevirt-utils/hooks/useFeatures/constants';
import useFeaturesConfigMap from '@kubevirt-utils/hooks/useFeatures/useFeaturesConfigMap';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
var useRHELAutomaticSubscription = function () {
    var _a, _b, _c, _d;
    var _e = useFeaturesConfigMap(), _f = _e.featuresConfigMapData, featureConfigMap = _f[0], loaded = _f[1], loadError = _f[2], isAdmin = _e.isAdmin;
    var _g = useState(false), loading = _g[0], setLoading = _g[1];
    var updateSubscription = function (_a) {
        var activationKey = _a.activationKey, customUrl = _a.customUrl, organizationID = _a.organizationID, type = _a.type;
        return __awaiter(void 0, void 0, void 0, function () {
            var updatedConfigMap;
            return __generator(this, function (_b) {
                setLoading(true);
                updatedConfigMap = produce(featureConfigMap, function (draftCM) {
                    if (isEmpty(draftCM === null || draftCM === void 0 ? void 0 : draftCM.data))
                        draftCM.data = {};
                    draftCM.data[AUTOMATIC_SUBSCRIPTION_ACTIVATION_KEY] =
                        activationKey !== undefined
                            ? activationKey
                            : draftCM.data[AUTOMATIC_SUBSCRIPTION_ACTIVATION_KEY];
                    draftCM.data[AUTOMATIC_SUBSCRIPTION_ORGANIZATION_ID] =
                        organizationID !== undefined
                            ? organizationID
                            : draftCM.data[AUTOMATIC_SUBSCRIPTION_ORGANIZATION_ID];
                    draftCM.data[AUTOMATIC_SUBSCRIPTION_CUSTOM_URL] =
                        customUrl !== undefined ? customUrl : draftCM.data[AUTOMATIC_SUBSCRIPTION_CUSTOM_URL];
                    draftCM.data[AUTOMATIC_SUBSCRIPTION_TYPE_KEY] =
                        type !== undefined ? type : draftCM.data[AUTOMATIC_SUBSCRIPTION_TYPE_KEY];
                });
                k8sUpdate({
                    data: updatedConfigMap,
                    model: ConfigMapModel,
                }).finally(function () { return setLoading(false); });
                return [2 /*return*/];
            });
        });
    };
    return {
        canEdit: isAdmin,
        loaded: loaded,
        loadError: loadError,
        loading: loading,
        subscriptionData: {
            activationKey: (_a = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _a === void 0 ? void 0 : _a[AUTOMATIC_SUBSCRIPTION_ACTIVATION_KEY],
            customUrl: (_b = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _b === void 0 ? void 0 : _b[AUTOMATIC_SUBSCRIPTION_CUSTOM_URL],
            organizationID: (_c = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _c === void 0 ? void 0 : _c[AUTOMATIC_SUBSCRIPTION_ORGANIZATION_ID],
            type: (_d = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _d === void 0 ? void 0 : _d[AUTOMATIC_SUBSCRIPTION_TYPE_KEY],
        },
        updateSubscription: updateSubscription,
    };
};
export default useRHELAutomaticSubscription;
//# sourceMappingURL=useRHELAutomaticSubscription.js.map