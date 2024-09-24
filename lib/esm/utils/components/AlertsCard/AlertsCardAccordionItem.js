import React from 'react';
import AlertStatusItem from '@kubevirt-utils/components/AlertsCard/AlertStatusItem';
import { AlertType } from '@kubevirt-utils/components/AlertsCard/utils/types';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { AccordionContent, AccordionItem, AccordionToggle, Divider, Label, } from '@patternfly/react-core';
import './AlertsCard.scss';
var AlertsCardAccordionItem = function (_a) {
    var _b;
    var alertOpen = _a.alertOpen, alerts = _a.alerts, alertType = _a.alertType, handleDrawerToggleClick = _a.handleDrawerToggleClick;
    var t = useKubevirtTranslation().t;
    var alertTitle = (_b = {},
        _b[AlertType.critical] = t('Critical'),
        _b[AlertType.info] = t('Info'),
        _b[AlertType.warning] = t('Warnings'),
        _b);
    return (React.createElement(AccordionItem, null,
        React.createElement(AccordionToggle, { onClick: function () {
                handleDrawerToggleClick(alertType);
            }, className: "alerts-card__toggle--item", id: alertType, isExpanded: alertOpen === alertType },
            React.createElement("div", { className: "subtitle" },
                React.createElement("span", { className: "subtitle-name" }, alertTitle === null || alertTitle === void 0 ? void 0 : alertTitle[alertType]),
                React.createElement(Label, { className: "subtitle-label", isCompact: true }, (alerts === null || alerts === void 0 ? void 0 : alerts.length) || 0))),
        React.createElement(AccordionContent, { id: alertType, isHidden: alertOpen !== alertType, key: alertType },
            React.createElement(Divider, null), alerts === null || alerts === void 0 ? void 0 :
            alerts.map(function (alert) { return (React.createElement("div", { className: "content", key: alert === null || alert === void 0 ? void 0 : alert.key },
                React.createElement(AlertStatusItem, { alertDetails: alert, alertType: alertType }))); }))));
};
export default AlertsCardAccordionItem;
//# sourceMappingURL=AlertsCardAccordionItem.js.map