var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { DataSourceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { sortable } from '@patternfly/react-table';
import { getDataSourceCronJob, getDataSourceLastUpdated } from '../../utils';
export var useDataSourcesColumns = function (namespace) {
    var t = useKubevirtTranslation().t;
    var columns = React.useMemo(function () { return __spreadArray(__spreadArray([
        {
            id: 'name',
            props: { className: 'pf-m-width-15' },
            sort: 'metadata.name',
            title: t('Name'),
            transforms: [sortable],
        }
    ], (!namespace
        ? [
            {
                id: 'namespace',
                props: { className: 'pf-m-width-10' },
                sort: 'metadata.namespace',
                title: t('Namespace'),
                transforms: [sortable],
            },
        ]
        : []), true), [
        {
            id: 'created',
            props: { className: 'pf-m-width-15' },
            sort: 'metadata.creationTimestamp',
            title: t('Created'),
            transforms: [sortable],
        },
        {
            id: 'updated',
            props: { className: 'pf-m-width-15' },
            sort: function (dataSources, dir) {
                return dataSources.sort(function (a, b) {
                    var aUpdated = getDataSourceLastUpdated(a);
                    var bUpdated = getDataSourceLastUpdated(b);
                    if (aUpdated && bUpdated) {
                        return dir === 'asc'
                            ? aUpdated.localeCompare(bUpdated)
                            : bUpdated.localeCompare(aUpdated);
                    }
                });
            },
            title: t('Updated'),
            transforms: [sortable],
        },
        {
            additional: true,
            id: 'import-cron',
            props: { className: 'pf-m-width-10' },
            sort: function (dataSources, dir) {
                // sort by boolean, if cron is available or not
                return dataSources.sort(function (a, b) {
                    return Number(!!getDataSourceCronJob(dir === 'asc' ? b : a)) -
                        Number(!!getDataSourceCronJob(dir === 'asc' ? a : b));
                });
            },
            title: t('Auto update'),
            transforms: [sortable],
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ], false); }, [t, namespace]);
    var activeColumns = useKubevirtUserSettingsTableColumns({
        columnManagementID: DataSourceModelRef,
        columns: columns,
    })[0];
    return [columns, activeColumns];
};
//# sourceMappingURL=useDataSourcesColumns.js.map