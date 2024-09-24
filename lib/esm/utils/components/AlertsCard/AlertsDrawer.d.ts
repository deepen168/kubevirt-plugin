import React from 'react';
import { SimplifiedAlerts } from '@kubevirt-utils/components/AlertsCard/utils/types';
declare type AlertsDrawerProps = {
    sortedAlerts: SimplifiedAlerts;
};
declare const AlertsDrawer: React.FC<AlertsDrawerProps>;
export default AlertsDrawer;
