import React from 'react';
import { MigrationPolicyModelRef } from '@kubevirt-ui/kubevirt-api/console';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useMigrationPolicies from '@kubevirt-utils/hooks/useMigrationPolicies';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, ListPageHeader, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import MigrationPoliciesCreateButton from './components/MigrationPoliciesCreateButton/MigrationPoliciesCreateButton';
import MigrationPoliciesEmptyState from './components/MigrationPoliciesEmptyState/MigrationPoliciesEmptyState';
import MigrationPoliciesRow from './components/MigrationPoliciesRow/MigrationPoliciesRow';
import useMigrationPoliciesListColumns from './hooks/useMigrationPoliciesListColumns';
var MigrationPoliciesList = function (_a) {
    var fieldSelector = _a.fieldSelector, hideColumnManagement = _a.hideColumnManagement, hideNameLabelFilters = _a.hideNameLabelFilters, hideTextFilter = _a.hideTextFilter, nameFilter = _a.nameFilter, selector = _a.selector, showTitle = _a.showTitle;
    var t = useKubevirtTranslation().t;
    var _b = useMigrationPolicies(fieldSelector, selector), mps = _b[0], loaded = _b[1], loadError = _b[2];
    var _c = useMigrationPoliciesListColumns(), columns = _c[0], activeColumns = _c[1], loadedColumns = _c[2];
    var _d = useListPageFilter(mps, null, {
        name: { selected: [nameFilter] },
    }), unfilteredData = _d[0], data = _d[1], onFilterChange = _d[2];
    if (loaded && isEmpty(unfilteredData)) {
        return React.createElement(MigrationPoliciesEmptyState, null);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: !(showTitle === false) && t('MigrationPolicies') },
            React.createElement(MigrationPoliciesCreateButton, null)),
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
                    id: MigrationPolicyModelRef,
                    selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                    type: t('MigrationPolicy'),
                }, data: unfilteredData, hideColumnManagement: hideColumnManagement, hideLabelFilter: hideTextFilter, hideNameLabelFilters: hideNameLabelFilters, loaded: loaded && loadedColumns, onFilterChange: onFilterChange }),
            React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center" }, t('No MigrationPolicies found'))); }, columns: activeColumns, data: data, loaded: loaded && loadedColumns, loadError: loadError, Row: MigrationPoliciesRow, unfilteredData: unfilteredData }))));
};
export default MigrationPoliciesList;
//# sourceMappingURL=MigrationPoliciesList.js.map