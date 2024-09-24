import { HCOHealthStatus } from '@kubevirt-utils/extensions/dashboard/types';
import { HealthState } from '@openshift-console/dynamic-plugin-sdk';
export var getKubevirtHealthState = function (responses) {
    var _a, _b, _c, _d;
    var _e = responses === null || responses === void 0 ? void 0 : responses[0], error = _e.error, response = _e.response;
    if (error) {
        return { state: HealthState.NOT_AVAILABLE };
    }
    if (!response) {
        return { state: HealthState.LOADING };
    }
    var hcoHealthStatus = parseInt((_d = (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d[1]);
    switch (hcoHealthStatus) {
        case HCOHealthStatus.none:
            return { state: HealthState.OK };
        case HCOHealthStatus.warning:
            return { state: HealthState.WARNING };
        case HCOHealthStatus.critical:
        default:
            return { state: HealthState.ERROR };
    }
};
//# sourceMappingURL=dashboardHealth.js.map