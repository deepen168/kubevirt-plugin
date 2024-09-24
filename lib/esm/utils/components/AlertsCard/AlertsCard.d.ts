import { FC } from 'react';
import { SimplifiedAlerts } from '@kubevirt-utils/components/AlertsCard/utils/types';
import './AlertsCard.scss';
declare type AlertsCardProps = {
    className?: string;
    isOverviewPage?: boolean;
    sortedAlerts: SimplifiedAlerts;
};
declare const AlertsCard: FC<AlertsCardProps>;
export default AlertsCard;
