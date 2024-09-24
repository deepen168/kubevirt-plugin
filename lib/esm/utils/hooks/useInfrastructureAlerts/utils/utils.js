import { OPERATOR_HEALTH_IMPACT_LABEL } from '@kubevirt-utils/hooks/useInfrastructureAlerts/utils/constants';
import { HealthImpactLevel } from '../../../../views/dashboard-extensions/KubevirtHealthPopup/utils/types';
export var isFiringOrSilencedAlert = function (alert) {
    return (alert === null || alert === void 0 ? void 0 : alert.state) === "firing" /* AlertStates.Firing */ || (alert === null || alert === void 0 ? void 0 : alert.state) === "silenced" /* AlertStates.Silenced */;
};
var getHealthImpact = function (alert) { var _a; return (_a = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _a === void 0 ? void 0 : _a[OPERATOR_HEALTH_IMPACT_LABEL]; };
export var isImportantInfrastructureAlert = function (alert) {
    var healthImpact = getHealthImpact(alert);
    return (healthImpact &&
        (healthImpact === HealthImpactLevel.warning || healthImpact === HealthImpactLevel.critical));
};
export var sortAlertsByHealthImpact = function (alerts) {
    return alerts === null || alerts === void 0 ? void 0 : alerts.reduce(function (acc, alert) {
        var _a;
        var healthImpact = getHealthImpact(alert);
        if (healthImpact)
            (_a = acc[healthImpact]) === null || _a === void 0 ? void 0 : _a.push(alert);
        return acc;
    }, { critical: [], none: [], warning: [] });
};
export var getNumberOfAlerts = function (alerts) {
    var _a;
    return (_a = Object.values(alerts)) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, alertsForImpactLevel) {
        acc += (alertsForImpactLevel === null || alertsForImpactLevel === void 0 ? void 0 : alertsForImpactLevel.length) || 0;
        return acc;
    }, 0);
};
//# sourceMappingURL=utils.js.map