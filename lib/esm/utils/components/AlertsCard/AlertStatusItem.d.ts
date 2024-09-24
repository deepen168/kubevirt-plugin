import React from 'react';
import { AlertType, SimplifiedAlert } from '@kubevirt-utils/components/AlertsCard/utils/types';
import './AlertStatusItem.scss';
declare type AlertStatusItemProps = {
    alertDetails: SimplifiedAlert;
    alertType: AlertType;
};
declare const AlertStatusItem: React.FC<AlertStatusItemProps>;
export default AlertStatusItem;
