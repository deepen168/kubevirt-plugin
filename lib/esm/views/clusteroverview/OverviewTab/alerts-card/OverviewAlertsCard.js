import * as React from 'react';
import AlertsCard from '@kubevirt-utils/components/AlertsCard/AlertsCard';
import useSimplifiedAlerts from './hooks/useSimplifiedAlerts';
import './OverviewAlertsCard.scss';
var OverviewAlertsCard = function () {
    var alerts = useSimplifiedAlerts();
    return React.createElement(AlertsCard, { className: "overview-alerts-card", isOverviewPage: true, sortedAlerts: alerts });
};
export default OverviewAlertsCard;
//# sourceMappingURL=OverviewAlertsCard.js.map