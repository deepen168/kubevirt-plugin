import { useMemo } from 'react';
import { SUCCESS } from '@kubevirt-utils/hooks/useAlerts/utils/constants';
import { getAlertsAndRules, silenceFiringAlerts, } from '@kubevirt-utils/hooks/useAlerts/utils/utils';
import useSilences from '@kubevirt-utils/hooks/useSilences/useSilences';
import { PrometheusEndpoint, usePrometheusPoll, } from '@openshift-console/dynamic-plugin-sdk';
var useAlerts = function () {
    var silences = useSilences().silences;
    var response = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.RULES,
    })[0];
    var pollingStatus = response === null || response === void 0 ? void 0 : response.status;
    var allAlerts = useMemo(function () {
        var alerts = getAlertsAndRules(response === null || response === void 0 ? void 0 : response.data).alerts;
        return silenceFiringAlerts(alerts, silences);
    }, [response, silences]);
    return { alerts: allAlerts || [], loaded: pollingStatus === SUCCESS };
};
export default useAlerts;
//# sourceMappingURL=useAlerts.js.map