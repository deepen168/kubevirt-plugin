import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { AlertType } from '@kubevirt-utils/components/AlertsCard/utils/types';
import LoadingEmptyState from '@kubevirt-utils/components/LoadingEmptyState/LoadingEmptyState';
import useInfrastructureAlerts from '@kubevirt-utils/hooks/useInfrastructureAlerts/useInfrastructureAlerts';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { YellowExclamationTriangleIcon } from '@openshift-console/dynamic-plugin-sdk';
import { RedExclamationCircleIcon } from '@openshift-console/dynamic-plugin-sdk/lib/app/components/status/icons';
import { Divider, Grid, GridItem, Stack, StackItem } from '@patternfly/react-core';
import Conditions from './components/Conditions/Conditions';
import HealthPopupChart from './components/HealthPopupChart';
import { HealthImpactLevel } from './utils/types';
import { ALERTS_BASE_PATH } from './utils/utils';
import './KubevirtHealthPopup.scss';
var KubevirtHealthPopup = function () {
    var _a, _b;
    var _c = useInfrastructureAlerts(), alerts = _c.alerts, loaded = _c.loaded, numberOfAlerts = _c.numberOfAlerts;
    var descriptionText = t('You can host and manage virtualized workloads on the same platform as container-based workloads.');
    var numCriticalAlerts = (_a = alerts === null || alerts === void 0 ? void 0 : alerts[HealthImpactLevel.critical]) === null || _a === void 0 ? void 0 : _a.length;
    var numWarningAlerts = (_b = alerts === null || alerts === void 0 ? void 0 : alerts[AlertType.warning]) === null || _b === void 0 ? void 0 : _b.length;
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { className: "kv-health-popup" },
            React.createElement(GridItem, { className: "kv-health-popup__description", span: 12 }, descriptionText),
            React.createElement(GridItem, { span: 6 },
                React.createElement(Stack, null,
                    React.createElement(StackItem, null,
                        React.createElement("div", { className: "kv-health-popup__title" }, t('Alerts'))),
                    !isEmpty(numCriticalAlerts) && (React.createElement(StackItem, null,
                        React.createElement("div", { className: "kv-health-popup__alerts-count" },
                            React.createElement(RedExclamationCircleIcon, { className: "kv-health-popup__alerts-count--icon" }),
                            React.createElement(Link, { to: "".concat(ALERTS_BASE_PATH).concat(HealthImpactLevel.critical) },
                                numCriticalAlerts,
                                " ",
                                t('Critical'))))),
                    !isEmpty(numWarningAlerts) && (React.createElement(StackItem, null,
                        React.createElement("div", { className: "kv-health-popup__alerts-count" },
                            React.createElement(YellowExclamationTriangleIcon, { className: "kv-health-popup__alerts-count--icon" }),
                            ' ',
                            React.createElement(Link, { to: "".concat(ALERTS_BASE_PATH).concat(HealthImpactLevel.warning) },
                                numWarningAlerts,
                                " ",
                                t('Warning'))))))),
            React.createElement(GridItem, { span: 6 }, loaded ? (React.createElement(HealthPopupChart, { alerts: alerts, numberOfAlerts: numberOfAlerts })) : (React.createElement(LoadingEmptyState, null)))),
        React.createElement(Divider, { className: "kv-health-popup__divider" }),
        React.createElement(Conditions, null)));
};
export default KubevirtHealthPopup;
//# sourceMappingURL=KubevirtHealthPopup.js.map