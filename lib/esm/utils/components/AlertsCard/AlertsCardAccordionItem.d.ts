import React from 'react';
import { AlertType } from '@kubevirt-utils/components/AlertsCard/utils/types';
import './AlertsCard.scss';
declare type AlertsCardAccordionItemProps = {
    alertOpen: AlertType;
    alerts: any;
    alertType: AlertType;
    handleDrawerToggleClick: (alertType: AlertType) => void;
};
declare const AlertsCardAccordionItem: React.FC<AlertsCardAccordionItemProps>;
export default AlertsCardAccordionItem;
