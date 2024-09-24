import { useMemo } from 'react';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import useAlerts from '@kubevirt-utils/hooks/useAlerts/useAlerts';
import { inNamespace, isKubeVirtAlert } from '@kubevirt-utils/utils/prometheus';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
var useKubevirtAlerts = function () {
    var activeNamespace = useActiveNamespace()[0];
    var _a = useAlerts(), alerts = _a.alerts, loaded = _a.loaded;
    var filteredAlerts = useMemo(function () {
        if (activeNamespace && activeNamespace !== ALL_NAMESPACES_SESSION_KEY) {
            return alerts === null || alerts === void 0 ? void 0 : alerts.filter(function (alert) { return isKubeVirtAlert(alert) && inNamespace(activeNamespace, alert); });
        }
        return alerts === null || alerts === void 0 ? void 0 : alerts.filter(function (alert) { return isKubeVirtAlert(alert); });
    }, [activeNamespace, alerts]);
    return [filteredAlerts, loaded];
};
export default useKubevirtAlerts;
//# sourceMappingURL=useKubevirtAlerts.js.map