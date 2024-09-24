import React from 'react';
import { VirtualMachineInstanceMigrationModelRef } from '@kubevirt-ui/kubevirt-api/console';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
import useVirtualMachineInstanceMigrationsColumns from './hooks/useVirtualMachineInstanceMigrationsColumns';
import MigrationsRow from './MigrationsRow';
var MigrationTable = function (_a) {
    var tableData = _a.tableData;
    var t = useKubevirtTranslation().t;
    var _b = tableData || {}, filters = _b.filters, loaded = _b.loaded, loadErrors = _b.loadErrors, migrationsTableFilteredData = _b.migrationsTableFilteredData, migrationsTableUnfilteredData = _b.migrationsTableUnfilteredData, onFilterChange = _b.onFilterChange;
    var _c = useVirtualMachineInstanceMigrationsColumns(), columns = _c[0], activeColumns = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageBody, null,
            React.createElement(ListPageFilter, { columnLayout: {
                    columns: columns === null || columns === void 0 ? void 0 : columns.map(function (_a) {
                        var additional = _a.additional, id = _a.id, title = _a.title;
                        return ({
                            additional: additional,
                            id: id,
                            title: title,
                        });
                    }),
                    id: VirtualMachineInstanceMigrationModelRef,
                    selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                    type: t('VirtualMachineInstanceMigration'),
                }, data: migrationsTableUnfilteredData, loaded: loaded, onFilterChange: onFilterChange, rowFilters: filters }),
            React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement(Bullseye, null,
                    React.createElement(ListPageBody, null, t('No migrations found')))); }, columns: activeColumns, data: migrationsTableFilteredData, loaded: loaded, loadError: loadErrors, Row: MigrationsRow, unfilteredData: migrationsTableUnfilteredData }))));
};
export default MigrationTable;
//# sourceMappingURL=MigrationsTable.js.map