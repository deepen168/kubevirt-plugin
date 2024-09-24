var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import classNames from 'classnames';
import AlertsDrawer from '@kubevirt-utils/components/AlertsCard/AlertsDrawer';
import { ALERTS_SCOPE_KEY, ALL_ALERTS, VIEW_ALL_ALERTS_PATH, VIRTUALIZATION_ONLY_ALERTS, } from '@kubevirt-utils/components/AlertsCard/utils/constants';
import { alertScopeOptions, removeVMAlerts, } from '@kubevirt-utils/components/AlertsCard/utils/utils';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useLocalStorage from '@kubevirt-utils/hooks/useLocalStorage';
import { Card, CardHeader, CardTitle, Popover, PopoverPosition } from '@patternfly/react-core';
import { SelectOption } from '@patternfly/react-core';
import './AlertsCard.scss';
var AlertsCard = function (_a) {
    var _b;
    var className = _a.className, _c = _a.isOverviewPage, isOverviewPage = _c === void 0 ? false : _c, sortedAlerts = _a.sortedAlerts;
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var _d = useLocalStorage(ALERTS_SCOPE_KEY, isAdmin ? VIRTUALIZATION_ONLY_ALERTS : ALL_ALERTS), alertScope = _d[0], setAlertScope = _d[1];
    var alerts = useMemo(function () {
        return !isOverviewPage || !isAdmin || alertScope === ALL_ALERTS
            ? sortedAlerts
            : removeVMAlerts(sortedAlerts);
    }, [alertScope, isAdmin, isOverviewPage, sortedAlerts]);
    // number of alerts according to the selected scope: Virtualization health only or all alerts
    var alertsQuantity = ((_b = Object.values(alerts)) === null || _b === void 0 ? void 0 : _b.reduce(function (acc, category) { return acc + (category === null || category === void 0 ? void 0 : category.length); }, 0)) || 0;
    return (React.createElement(Card, { className: classNames('alerts-card', className) },
        React.createElement(CardHeader, __assign({}, (isOverviewPage && {
            actions: {
                actions: (React.createElement(React.Fragment, null,
                    isAdmin && (React.createElement(Link, { className: "alerts-card__view-all-link", to: VIEW_ALL_ALERTS_PATH }, t('View all'))),
                    isAdmin ? (React.createElement(FormPFSelect, { onSelect: function (e, value) { return setAlertScope(value); }, popperProps: { position: 'right' }, selected: alertScope, toggleProps: { id: 'overview-alerts-card' } }, alertScopeOptions().map(function (scope) { return (React.createElement(SelectOption, { description: scope.description, key: scope.key, value: scope.value }, scope.value)); }))) : (React.createElement(Popover, { bodyContent: React.createElement("div", null, t('Only VM-related alerts in your project will be shown')), "aria-label": "Only VM-related alerts notification", className: "alerts-card__nonadmin-popover", enableFlip: false, hasAutoWidth: true, maxWidth: "250px", position: PopoverPosition.top },
                        React.createElement(FormPFSelect, { onSelect: function (e, value) { return setAlertScope(value); }, selected: alertScope, toggleProps: { id: 'overview-alerts-card' } }, alertScopeOptions().map(function (scope) { return (React.createElement(SelectOption, { description: scope.description, key: scope.key, value: scope.value }, scope.value)); })))))),
                className: 'co-overview-card__actions alerts-card__actions',
                hasNoOffset: false,
            },
        }), { className: "alerts-card__header" }),
            React.createElement(CardTitle, { className: "text-muted card-title" }, t('Alerts ({{alertsQuantity}})', { alertsQuantity: alertsQuantity }))),
        React.createElement(AlertsDrawer, { sortedAlerts: alerts })));
};
export default AlertsCard;
//# sourceMappingURL=AlertsCard.js.map