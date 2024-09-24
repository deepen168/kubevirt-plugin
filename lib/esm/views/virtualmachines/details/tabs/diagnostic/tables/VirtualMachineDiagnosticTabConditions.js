import React, { useEffect, useMemo, useState } from 'react';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePagination from '@kubevirt-utils/hooks/usePagination/usePagination';
import { paginationDefaultValues } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import { columnSorting, isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, useListPageFilter } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Flex, FlexItem, Pagination, Title } from '@patternfly/react-core';
import { Table, Th, Thead, Tr } from '@patternfly/react-table';
import useDiagnosticConditionsTableColumns from '../hooks/useDiagnosticConditionsTableColumns';
import useDiagnosticFilter from '../hooks/useDiagnosticFilter';
import VirtualMachineDiagnosticTabRow from '../VirtualMachineDiagnosticTabRow';
var VirtualMachineDiagnosticTabConditions = function (_a) {
    var conditions = _a.conditions;
    var t = useKubevirtTranslation().t;
    var _b = useState({
        expended: new Set(),
        ids: new Set(),
    }), expend = _b[0], setExpend = _b[1];
    var _c = useDiagnosticConditionsTableColumns(), columns = _c[0], activeColumns = _c[1], sorting = _c[2], loadedColumns = _c[3];
    var _d = usePagination(), onPaginationChange = _d.onPaginationChange, pagination = _d.pagination;
    var sortedData = useMemo(function () { return columnSorting(conditions, sorting === null || sorting === void 0 ? void 0 : sorting.direction, pagination, sorting === null || sorting === void 0 ? void 0 : sorting.column); }, [conditions, sorting, pagination]);
    var filters = useDiagnosticFilter();
    var _f = useListPageFilter(sortedData, filters), unfilteredData = _f[0], filteredData = _f[1], onFilterChange = _f[2];
    useEffect(function () {
        return sortedData.forEach(function (_a) {
            var id = _a.id;
            setExpend(function (expendObj) {
                return { expended: new Set(), ids: new Set(expendObj === null || expendObj === void 0 ? void 0 : expendObj.ids).add(id) };
            });
        });
    }, [sortedData]);
    if (!loadedColumns) {
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageBody, null,
            React.createElement(Title, { className: "VirtualMachineDiagnosticTab--header", headingLevel: "h2" },
                t('Status conditions'),
                ' ',
                React.createElement(HelpTextIcon, { bodyContent: t('Conditions provide a standard mechanism for status reporting. Conditions are reported for all aspects of a VM.'), helpIconClassName: "VirtualMachineDiagnosticTab--HelpTextIcon" })),
            React.createElement(Flex, { justifyContent: { default: 'justifyContentSpaceBetween' } },
                React.createElement(FlexItem, null,
                    React.createElement(ListPageFilter, { columnLayout: {
                            columns: columns === null || columns === void 0 ? void 0 : columns.map(function (_a) {
                                var id = _a.id, title = _a.title;
                                return ({
                                    id: id,
                                    title: title,
                                });
                            }),
                            id: 'diagnostic-tab-status',
                            selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                            type: t('VirtualMachine'),
                        }, onFilterChange: function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            onFilterChange.apply(void 0, args);
                            onPaginationChange({
                                endIndex: pagination === null || pagination === void 0 ? void 0 : pagination.perPage,
                                page: 1,
                                perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage,
                                startIndex: 0,
                            });
                        }, data: unfilteredData, hideLabelFilter: true, loaded: !isEmpty(unfilteredData) && loadedColumns, nameFilterPlaceholder: t('Search by reason...'), rowFilters: filters })),
                React.createElement(FlexItem, null,
                    React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                            return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                        }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                            return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                        }, isLastFullPageShown: true, itemCount: filteredData === null || filteredData === void 0 ? void 0 : filteredData.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues })))),
        React.createElement(Table, { isExpandable: true },
            React.createElement(Thead, null,
                React.createElement(Tr, null,
                    React.createElement(Th, { expand: {
                            areAllExpanded: expend.expended.size !== expend.ids.size,
                            collapseAllAriaLabel: '',
                            onToggle: function (_, __, isOpen) {
                                setExpend(function (expendObj) { return ({
                                    expended: new Set(!isOpen ? [] : expendObj.ids),
                                    ids: new Set(expendObj === null || expendObj === void 0 ? void 0 : expendObj.ids),
                                }); });
                            },
                        } }), activeColumns === null || activeColumns === void 0 ? void 0 :
                    activeColumns.map(function (_a, index) {
                        var sort = _a.cell.sort, title = _a.title;
                        return (React.createElement(Th, { key: title, sort: sort(index) }, title));
                    }))),
            filteredData.map(function (row, index) {
                var _a;
                return (React.createElement(VirtualMachineDiagnosticTabRow, { activeColumns: activeColumns, expend: expend, index: index, key: (_a = row === null || row === void 0 ? void 0 : row.metadata) === null || _a === void 0 ? void 0 : _a.name, obj: row, setExpend: setExpend }));
            }))));
};
export default VirtualMachineDiagnosticTabConditions;
//# sourceMappingURL=VirtualMachineDiagnosticTabConditions.js.map