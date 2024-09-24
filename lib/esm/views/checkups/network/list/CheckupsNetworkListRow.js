import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { modelToGroupVersionKind, NamespaceModel } from '@kubevirt-ui/kubevirt-api/console';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData, Timestamp } from '@openshift-console/dynamic-plugin-sdk';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import CheckupsNetworkStatusIcon from '../../CheckupsNetworkStatusIcon';
import { STATUS_COMPILATION_TIME_STAMP, STATUS_START_TIME_STAMP } from '../../utils/utils';
import CheckupsNetworkActions from '../components/CheckupsNetworkActions';
import { STATUS_MAX_LATENCY_NANO, STATUS_MIN_LATENCY_NANO, STATUS_NAD_NAME, STATUS_SAMPLE_DURATION, STATUS_SOURCE_NODE, STATUS_TARGET_NODE, } from '../utils/utils';
var CheckupsNetworkListRow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var activeColumnIDs = _a.activeColumnIDs, configMap = _a.obj, getJobByName = _a.rowData.getJobByName;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(Link, { to: createURL("network/".concat((_b = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _b === void 0 ? void 0 : _b.name), "/k8s/ns/".concat((_c = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _c === void 0 ? void 0 : _c.namespace, "/checkups")) }, (_d = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _d === void 0 ? void 0 : _d.name)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace" },
            React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NamespaceModel), name: (_e = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _e === void 0 ? void 0 : _e.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "nad" }, ((_f = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _f === void 0 ? void 0 : _f[STATUS_NAD_NAME]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" },
            React.createElement(CheckupsNetworkStatusIcon, { configMap: configMap, job: (_h = getJobByName((_g = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _g === void 0 ? void 0 : _g.name)) === null || _h === void 0 ? void 0 : _h[0] })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "latency" }, ((_j = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _j === void 0 ? void 0 : _j[STATUS_MAX_LATENCY_NANO]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "duration" }, ((_k = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _k === void 0 ? void 0 : _k[STATUS_SAMPLE_DURATION]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "min-latency" }, (_l = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _l === void 0 ? void 0 : _l[STATUS_MIN_LATENCY_NANO]),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "max-latency" }, (_m = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _m === void 0 ? void 0 : _m[STATUS_MAX_LATENCY_NANO]),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "source-node" }, ((_o = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _o === void 0 ? void 0 : _o[STATUS_SOURCE_NODE]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "target-node" }, ((_p = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _p === void 0 ? void 0 : _p[STATUS_TARGET_NODE]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "start-time" },
            React.createElement(Timestamp, { timestamp: (_q = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _q === void 0 ? void 0 : _q[STATUS_START_TIME_STAMP] })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "complete-time" },
            React.createElement(Timestamp, { timestamp: (_r = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _r === void 0 ? void 0 : _r[STATUS_COMPILATION_TIME_STAMP] })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(CheckupsNetworkActions, { configMap: configMap, isKebab: true, jobs: getJobByName((_s = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _s === void 0 ? void 0 : _s.name) }))));
};
export default CheckupsNetworkListRow;
//# sourceMappingURL=CheckupsNetworkListRow.js.map