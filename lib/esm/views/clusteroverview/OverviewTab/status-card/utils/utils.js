var _a;
import * as React from 'react';
import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import NetworkAddonsConfigModel from '@kubevirt-ui/kubevirt-api/console/models/NetworkAddonsConfigModel';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { GreenCheckCircleIcon, HealthState, RedExclamationCircleIcon, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
import { InProgressIcon } from '@patternfly/react-icons';
import BlueArrowCircleUpIcon from '../../../utils/Components/BlueArrowCircleUpIcon';
import { ClusterServiceVersionPhase } from '../../../utils/types';
import BlueSyncIcon from './health-state-icons/BlueSyncIcon';
import GrayUnknownIcon from './health-state-icons/GrayUnknownIcon';
import { CLUSTER } from './constants';
export var NetworkAddonsConfigResource = {
    groupVersionKind: modelToGroupVersionKind(NetworkAddonsConfigModel),
    isList: true,
    namespaced: false,
};
export var getClusterNAC = function (nacList) { return nacList === null || nacList === void 0 ? void 0 : nacList.find(function (nac) { var _a; return ((_a = nac === null || nac === void 0 ? void 0 : nac.metadata) === null || _a === void 0 ? void 0 : _a.name) === CLUSTER; }); };
export var filterSubsystems = function (subsystems, typeGuard, k8sModels) {
    return subsystems.filter(function (s) {
        var _a, _b, _c, _d, _e;
        // TODO Fix typing
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (typeGuard(s)) {
            var subsystem = s;
            return ((_a = subsystem === null || subsystem === void 0 ? void 0 : subsystem.properties) === null || _a === void 0 ? void 0 : _a.additionalResource) &&
                !((_c = (_b = subsystem === null || subsystem === void 0 ? void 0 : subsystem.properties) === null || _b === void 0 ? void 0 : _b.additionalResource) === null || _c === void 0 ? void 0 : _c.optional)
                ? !!k8sModels[(_e = (_d = subsystem === null || subsystem === void 0 ? void 0 : subsystem.properties) === null || _d === void 0 ? void 0 : _d.additionalResource) === null || _e === void 0 ? void 0 : _e.kind]
                : true;
        }
        return true;
    });
};
var getHealthStatusFromCSV = function (csv) {
    var _a;
    var csvStatus = (_a = csv === null || csv === void 0 ? void 0 : csv.status) === null || _a === void 0 ? void 0 : _a.phase;
    switch (csvStatus) {
        case ClusterServiceVersionPhase.CSVPhaseSucceeded:
            return {
                message: t('Available'),
                state: HealthState.OK,
            };
        case ClusterServiceVersionPhase.CSVPhaseFailed:
            return {
                message: t('Error'),
                state: HealthState.ERROR,
            };
        default:
            return {
                message: t('Not available'),
                state: HealthState.NOT_AVAILABLE,
            };
    }
};
export var getStorageOperatorHealthStatus = function (operatorCSV, loaded, loadErrors) {
    if (!loaded) {
        return { state: HealthState.LOADING };
    }
    if (!isEmpty(loadErrors) || !operatorCSV) {
        return { message: t('Not available'), state: HealthState.NOT_AVAILABLE };
    }
    return getHealthStatusFromCSV(operatorCSV);
};
export var getOverallStorageStatus = function (lsoState, odfState, loaded, loadErrors) {
    var lsoAvailable = lsoState.state === HealthState.OK;
    var odfAvailable = odfState.state === HealthState.OK;
    if (!loaded) {
        return { state: HealthState.LOADING };
    }
    if (!isEmpty(loadErrors)) {
        return { state: HealthState.ERROR };
    }
    if (lsoAvailable || odfAvailable) {
        return { state: HealthState.OK };
    }
    return { state: HealthState.NOT_AVAILABLE };
};
export var healthStateMapping = (_a = {},
    _a[HealthState.ERROR] = {
        health: HealthState.ERROR,
        icon: React.createElement(RedExclamationCircleIcon, { title: "Error" }),
        priority: 6,
    },
    _a[HealthState.LOADING] = {
        health: HealthState.LOADING,
        icon: React.createElement("div", { className: "skeleton-health" }),
        priority: 7,
    },
    _a[HealthState.NOT_AVAILABLE] = {
        health: HealthState.NOT_AVAILABLE,
        icon: React.createElement(GrayUnknownIcon, { title: "Not available" }),
        priority: 8,
    },
    _a[HealthState.OK] = {
        health: HealthState.OK,
        icon: React.createElement(GreenCheckCircleIcon, { title: "Healthy" }),
        priority: 0,
    },
    _a[HealthState.PROGRESS] = {
        health: HealthState.PROGRESS,
        icon: React.createElement(InProgressIcon, { title: "In progress" }),
        priority: 2,
    },
    _a[HealthState.UNKNOWN] = {
        health: HealthState.UNKNOWN,
        icon: React.createElement(GrayUnknownIcon, { title: "Unknown" }),
        priority: 1,
    },
    _a[HealthState.UPDATING] = {
        health: HealthState.UPDATING,
        icon: React.createElement(BlueSyncIcon, { title: "Updating" }),
        priority: 3,
    },
    _a[HealthState.UPGRADABLE] = {
        health: HealthState.UPGRADABLE,
        icon: React.createElement(BlueArrowCircleUpIcon, { title: "Upgrade available" }),
        priority: 4,
    },
    _a[HealthState.WARNING] = {
        health: HealthState.WARNING,
        icon: React.createElement(YellowExclamationTriangleIcon, { title: "Warning" }),
        priority: 5,
    },
    _a);
export var AlertResource = {
    abbr: 'AL',
    kind: 'Alert',
    label: 'Alert',
    plural: '/monitoring/alerts',
};
export var labelsToParams = function (labels) {
    return Object.entries(labels)
        .map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v));
    })
        .join('&');
};
export var getAlertURL = function (alert, ruleID) {
    return "".concat(AlertResource.plural, "/").concat(ruleID, "?").concat(labelsToParams(alert.labels));
};
export var asArray = function (value) {
    if (!value) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
};
//# sourceMappingURL=utils.js.map