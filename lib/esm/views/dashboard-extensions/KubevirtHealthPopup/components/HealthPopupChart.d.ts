import { FC } from 'react';
import { AlertsByHealthImpact } from '@kubevirt-utils/hooks/useInfrastructureAlerts/useInfrastructureAlerts';
declare type HealthPopupChartProps = {
    alerts: AlertsByHealthImpact;
    numberOfAlerts?: number;
};
declare const HealthPopupChart: FC<HealthPopupChartProps>;
export default HealthPopupChart;
