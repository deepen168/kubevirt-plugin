import React from 'react';
import AlertsCardAccordionItem from '@kubevirt-utils/components/AlertsCard/AlertsCardAccordionItem';
import { AlertType } from '@kubevirt-utils/components/AlertsCard/utils/types';
import { labelColor, labelIcon, labelText, } from '@kubevirt-utils/components/AlertsCard/utils/utils';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionToggle, Button, ButtonVariant, Flex, Label, } from '@patternfly/react-core';
var AlertsDrawer = function (_a) {
    var _b, _c, _d;
    var sortedAlerts = _a.sortedAlerts;
    var _e = React.useState(null), alertTypeOpen = _e[0], setAlertTypeOpen = _e[1];
    var _f = React.useState(false), titleOpen = _f[0], setTitleOpen = _f[1];
    var _g = React.useState(false), defaultOpenCritical = _g[0], setDefaultOpenCritical = _g[1];
    var handleDrawerToggleClick = React.useCallback(function (alertType) {
        setAlertTypeOpen(function (alert) { return (alert === alertType ? null : alertType); });
    }, []);
    var alertsQuantity = ((_b = Object.values(sortedAlerts)) === null || _b === void 0 ? void 0 : _b.reduce(function (acc, category) { return acc + (category === null || category === void 0 ? void 0 : category.length); }, 0)) || 0;
    React.useEffect(function () {
        //open critical alerts by default, if exists, only for the first time loading
        if (!defaultOpenCritical && !isEmpty(sortedAlerts === null || sortedAlerts === void 0 ? void 0 : sortedAlerts.critical)) {
            setTitleOpen(true);
            setAlertTypeOpen(AlertType.critical);
            setDefaultOpenCritical(true);
        }
    }, [sortedAlerts, defaultOpenCritical]);
    return (React.createElement("div", { className: "alerts-card__drawer" }, alertsQuantity > 0 ? (React.createElement(Accordion, { asDefinitionList: true, isBordered: true },
        React.createElement(AccordionItem, null,
            React.createElement(AccordionToggle, { onClick: function () {
                    setTitleOpen(function (title) {
                        title && setAlertTypeOpen(null);
                        return !title;
                    });
                }, className: "alerts-card__toggle--main", id: "toggle-main", isExpanded: titleOpen },
                React.createElement(Flex, null, (_c = Object.keys(sortedAlerts)) === null || _c === void 0 ? void 0 : _c.map(function (alertType) {
                    var _a;
                    var numAlerts = (_a = sortedAlerts === null || sortedAlerts === void 0 ? void 0 : sortedAlerts[alertType]) === null || _a === void 0 ? void 0 : _a.length;
                    // // Don't show alerts in the drawer header if there are no alerts of the type
                    if (numAlerts === 0) {
                        return null;
                    }
                    return (React.createElement(Button, { onClick: function (e) {
                            setAlertTypeOpen(function (prevAlertOpen) {
                                return titleOpen && prevAlertOpen === alertType
                                    ? null
                                    : alertType;
                            });
                            setTitleOpen(function (prevTitleOpen) { return !prevTitleOpen || alertTypeOpen !== alertType; });
                            e === null || e === void 0 ? void 0 : e.stopPropagation();
                        }, className: "pf-m-link--align-left", key: alertType, variant: ButtonVariant.plain },
                        React.createElement(Label, { className: "alerts-label", color: labelColor[alertType], icon: labelIcon[alertType], key: alertType }, numAlerts || 0),
                        React.createElement("span", { className: "alerts-label--text" }, labelText[alertType])));
                }))),
            React.createElement(AccordionContent, { id: "toggle-main", isHidden: !titleOpen }, (_d = Object.entries(sortedAlerts)) === null || _d === void 0 ? void 0 : _d.map(function (_a) {
                var alertType = _a[0], alerts = _a[1];
                return (React.createElement(AlertsCardAccordionItem, { alertOpen: alertTypeOpen, alerts: alerts, alertType: AlertType[alertType], handleDrawerToggleClick: handleDrawerToggleClick, key: alertType }));
            }))))) : null));
};
export default AlertsDrawer;
//# sourceMappingURL=AlertsDrawer.js.map