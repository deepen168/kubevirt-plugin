import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { modelToGroupVersionKind, NamespaceModel } from '@kubevirt-ui/kubevirt-api/console';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData, Timestamp } from '@openshift-console/dynamic-plugin-sdk';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import CheckupsNetworkStatusIcon from '../../CheckupsNetworkStatusIcon';
import { STATUS_COMPILATION_TIME_STAMP, STATUS_FAILURE_REASON, STATUS_START_TIME_STAMP, } from '../../utils/utils';
import CheckupsStorageActions from '../components/CheckupsStorageActions';
var CheckupsStorageListRow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var activeColumnIDs = _a.activeColumnIDs, configMap = _a.obj, getJobByName = _a.rowData.getJobByName;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(Link, { to: createURL("storage/".concat((_b = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _b === void 0 ? void 0 : _b.name), "/k8s/ns/".concat((_c = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _c === void 0 ? void 0 : _c.namespace, "/checkups")) }, (_d = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _d === void 0 ? void 0 : _d.name)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace" },
            React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NamespaceModel), name: (_e = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _e === void 0 ? void 0 : _e.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" },
            React.createElement(CheckupsNetworkStatusIcon, { configMap: configMap, job: (_g = getJobByName((_f = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _f === void 0 ? void 0 : _f.name)) === null || _g === void 0 ? void 0 : _g[0] })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "failure" }, ((_h = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _h === void 0 ? void 0 : _h[STATUS_FAILURE_REASON]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "start-time" },
            React.createElement(Timestamp, { timestamp: (_j = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _j === void 0 ? void 0 : _j[STATUS_START_TIME_STAMP] })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "complete-time" },
            React.createElement(Timestamp, { timestamp: (_k = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _k === void 0 ? void 0 : _k[STATUS_COMPILATION_TIME_STAMP] })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(CheckupsStorageActions, { configMap: configMap, isKebab: true, jobs: getJobByName((_l = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _l === void 0 ? void 0 : _l.name) }))));
};
export default CheckupsStorageListRow;
//# sourceMappingURL=CheckupsStorageListRow.js.map