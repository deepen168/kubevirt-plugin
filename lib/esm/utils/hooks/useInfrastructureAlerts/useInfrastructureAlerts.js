import { useMemo } from 'react';
import useAlerts from '@kubevirt-utils/hooks/useAlerts/useAlerts';
import { getNumberOfAlerts, isFiringOrSilencedAlert, isImportantInfrastructureAlert, sortAlertsByHealthImpact, } from '@kubevirt-utils/hooks/useInfrastructureAlerts/utils/utils';
import { isKubeVirtAlert } from '@kubevirt-utils/utils/prometheus';
var useInfrastructureAlerts = function () {
    var _a = useAlerts(), alerts = _a.alerts, loaded = _a.loaded;
    var alertsByHealthImpact = useMemo(function () {
        var filteredAlerts = alerts === null || alerts === void 0 ? void 0 : alerts.filter(function (alert) {
            return isKubeVirtAlert(alert) &&
                isFiringOrSilencedAlert(alert) &&
                isImportantInfrastructureAlert(alert);
        });
        return sortAlertsByHealthImpact(filteredAlerts);
    }, [alerts]);
    return {
        alerts: alertsByHealthImpact,
        loaded: loaded,
        numberOfAlerts: getNumberOfAlerts(alertsByHealthImpact) || 0,
    };
};
export default useInfrastructureAlerts;
//# sourceMappingURL=useInfrastructureAlerts.js.map