import React, { useEffect, useMemo, useState } from 'react';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePagination from '@kubevirt-utils/hooks/usePagination/usePagination';
import { paginationDefaultValues } from '@kubevirt-utils/hooks/usePagination/utils/constants';
import { columnSorting } from '@kubevirt-utils/utils/utils';
import { ListPageBody } from '@openshift-console/dynamic-plugin-sdk';
import { Flex, FlexItem, Pagination, Title } from '@patternfly/react-core';
import { Table, Th, Thead, Tr } from '@patternfly/react-table';
import useDiagnosticVolumeStatusTableColumns from '../hooks/useDiagnosticVolumeStatusTableColumns';
import VirtualMachineDiagnosticTabRow from '../VirtualMachineDiagnosticTabRow';
var VirtualMachineDiagnosticTabVolumeStatus = function (_a) {
    var volumeSnapshotStatuses = _a.volumeSnapshotStatuses;
    var t = useKubevirtTranslation().t;
    var _b = useState({
        expended: new Set(),
        ids: new Set(),
    }), expend = _b[0], setExpend = _b[1];
    var _c = useDiagnosticVolumeStatusTableColumns(), columns = _c.columns, sorting = _c.sorting;
    var _d = usePagination(), onPaginationChange = _d.onPaginationChange, pagination = _d.pagination;
    var sortedData = useMemo(function () { return columnSorting(volumeSnapshotStatuses, sorting === null || sorting === void 0 ? void 0 : sorting.direction, pagination, sorting === null || sorting === void 0 ? void 0 : sorting.column); }, [volumeSnapshotStatuses, sorting, pagination]);
    useEffect(function () {
        return volumeSnapshotStatuses.forEach(function (_a) {
            var id = _a.id;
            setExpend(function (expendObj) {
                return { expended: new Set(), ids: new Set(expendObj === null || expendObj === void 0 ? void 0 : expendObj.ids).add(id) };
            });
        });
    }, [volumeSnapshotStatuses]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageBody, null,
            React.createElement(Flex, { justifyContent: { default: 'justifyContentSpaceBetween' } },
                React.createElement(FlexItem, null,
                    React.createElement(Title, { className: "VirtualMachineDiagnosticTab--header", headingLevel: "h2" },
                        t('Volume snapshot status'),
                        ' ',
                        React.createElement(HelpTextIcon, { bodyContent: t('Volume Snapshot Status is a mechanism for reporting if a volume can be snapshotted or not.'), helpIconClassName: "VirtualMachineDiagnosticTab--HelpTextIcon" }))),
                React.createElement(FlexItem, null,
                    React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                            return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                        }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                            return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                        }, isLastFullPageShown: true, itemCount: sortedData === null || sortedData === void 0 ? void 0 : sortedData.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues })))),
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
                        } }), columns === null || columns === void 0 ? void 0 :
                    columns.map(function (_a, index) {
                        var sort = _a.cell.sort, title = _a.title;
                        return (React.createElement(Th, { key: title, sort: sort(index) }, title));
                    }))),
            sortedData.map(function (row, index) {
                var _a;
                return (React.createElement(VirtualMachineDiagnosticTabRow, { activeColumns: columns, expend: expend, index: index, key: (_a = row === null || row === void 0 ? void 0 : row.metadata) === null || _a === void 0 ? void 0 : _a.name, obj: row, setExpend: setExpend }));
            }))));
};
export default VirtualMachineDiagnosticTabVolumeStatus;
//# sourceMappingURL=VirtualMachineDiagnosticTabVolumeStatus.js.map