var _a, _b, _c, _d;
import React from 'react';
import { ALL_ALERTS, VIRTUALIZATION_ONLY_ALERTS, } from '@kubevirt-utils/components/AlertsCard/utils/constants';
import { AlertType } from '@kubevirt-utils/components/AlertsCard/utils/types';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
import { BlueInfoCircleIcon, RedExclamationCircleIcon, } from '@openshift-console/dynamic-plugin-sdk/lib/app/components/status/icons';
import { ExclamationCircleIcon, ExclamationTriangleIcon } from '@patternfly/react-icons';
export var labelColor = (_a = {},
    _a[AlertType.critical] = 'red',
    _a[AlertType.info] = 'blue',
    _a[AlertType.warning] = 'orange',
    _a);
export var labelIcon = (_b = {},
    _b[AlertType.critical] = React.createElement(ExclamationCircleIcon, null),
    _b[AlertType.info] = React.createElement(ExclamationCircleIcon, null),
    _b[AlertType.warning] = React.createElement(ExclamationTriangleIcon, null),
    _b);
export var labelText = (_c = {},
    _c[AlertType.critical] = t('Critical'),
    _c[AlertType.info] = t('Info'),
    _c[AlertType.warning] = t('Warning'),
    _c);
export var alertIcon = (_d = {},
    _d[AlertType.critical] = function () { return React.createElement(RedExclamationCircleIcon, { title: "Critical" }); },
    _d[AlertType.info] = function () { return React.createElement(BlueInfoCircleIcon, { title: "Information" }); },
    _d[AlertType.warning] = function () { return React.createElement(YellowExclamationTriangleIcon, { title: "Warning" }); },
    _d);
export var removeVMAlerts = function (sortedAlerts) {
    return Object.entries(sortedAlerts).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = value === null || value === void 0 ? void 0 : value.filter(function (alert) { return !(alert === null || alert === void 0 ? void 0 : alert.isVMAlert); });
        return acc;
    }, { critical: [], info: [], warning: [] });
};
export var createAlertKey = function (activeAt, labels) {
    return [activeAt, labels === null || labels === void 0 ? void 0 : labels.name, labels === null || labels === void 0 ? void 0 : labels.vmName, labels === null || labels === void 0 ? void 0 : labels.pod, labels === null || labels === void 0 ? void 0 : labels.uid, labels === null || labels === void 0 ? void 0 : labels.instance]
        .filter(Boolean)
        .join('-');
};
export var alertScopeOptions = function () { return [
    {
        description: t('See only virtualization health alerts'),
        key: VIRTUALIZATION_ONLY_ALERTS,
        value: t('Show virtualization health alerts'),
    },
    {
        description: t('See alerts for virtualization health and VMs'),
        key: ALL_ALERTS,
        value: t('Show all alerts'),
    },
]; };
//# sourceMappingURL=utils.js.map