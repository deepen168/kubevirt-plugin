import * as React from 'react';
import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import DataSourceActions from '../actions/DataSourceActions';
import { getDataSourceCronJob, getDataSourceLastUpdated } from '../utils';
export var DataSourcesListRow = function (_a) {
    var _b;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var t = useKubevirtTranslation().t;
    var importCron = getDataSourceCronJob(obj);
    var lastUpdated = getDataSourceLastUpdated(obj);
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(DataSourceModel), name: obj.metadata.name, namespace: obj.metadata.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "namespace" },
            React.createElement(ResourceLink, { kind: "Namespace", name: obj.metadata.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "created" },
            React.createElement(Timestamp, { timestamp: (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.creationTimestamp })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "updated" },
            React.createElement(Timestamp, { timestamp: lastUpdated })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "import-cron" }, importCron ? t('Yes') : t('No')),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(DataSourceActions, { dataSource: obj, isKebabToggle: true }))));
};
//# sourceMappingURL=DataSourcesListRow.js.map