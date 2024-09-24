import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { alertIcon } from '@kubevirt-utils/components/AlertsCard/utils/utils';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import './AlertStatusItem.scss';
var AlertStatusItem = function (_a) {
    var alertDetails = _a.alertDetails, alertType = _a.alertType;
    var t = useKubevirtTranslation().t;
    var alertName = alertDetails.alertName, description = alertDetails.description, isVMAlert = alertDetails.isVMAlert, link = alertDetails.link, time = alertDetails.time;
    var Icon = alertIcon[alertType];
    return (React.createElement("div", { className: "alert-item" },
        React.createElement("div", { className: "alert-item__icon co-dashboard-icon" },
            React.createElement(Icon, null)),
        React.createElement("div", { className: "alert-item__text" },
            React.createElement("div", { className: "alert-item__message" },
                React.createElement("div", { className: "alert-item__header alert-item__text text-secondary", "data-test": "timestamp" },
                    React.createElement("span", { className: "co-resource-item__resource-name" },
                        isVMAlert && (React.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--md alert-item__resource-icon" }, t('VM'))),
                        React.createElement(Timestamp, { className: "alert-item__timestamp", hideIcon: true, timestamp: time }))),
                React.createElement("div", { className: "alert-name" }, alertName),
                React.createElement("span", { className: "alert-item__text co-break-word" }, description)),
            React.createElement("div", { className: "alert-item__more" },
                React.createElement(Link, { to: link }, t('View alert'))))));
};
export default AlertStatusItem;
//# sourceMappingURL=AlertStatusItem.js.map