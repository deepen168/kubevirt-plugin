import React, { useMemo, useState } from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { instanceTypeActionType, } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { groupVersionKindFromCommonResource } from '@catalog/CreateFromInstanceTypes/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { isAllNamespaces, isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink, Timestamp, useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { ActionList, ActionListItem, Bullseye, Pagination, SearchInput, } from '@patternfly/react-core';
import { Table, TableVariant, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
import UserProvidedInstanceTypesEmptyState from './components/UserProvidedInstanceTypesEmptyState';
import useInstanceTypeListColumns from './hooks/useInstanceTypeListColumn';
import { paginationDefaultValues, paginationInitialState } from './utils/constants';
import './UserProvidedInstanceTypeList.scss';
var UserProvidedInstanceTypesList = function (_a) {
    var userProvidedInstanceTypes = _a.userProvidedInstanceTypes;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var _b = useInstanceTypeVMStore(), selectedInstanceType = _b.instanceTypeVMState.selectedInstanceType, setInstanceTypeVMState = _b.setInstanceTypeVMState;
    var _c = useState(''), searchInput = _c[0], setSearchInput = _c[1];
    var _d = useState(paginationInitialState), pagination = _d[0], setPagination = _d[1];
    var onPaginationChange = function (_a) {
        var endIndex = _a.endIndex, page = _a.page, perPage = _a.perPage, startIndex = _a.startIndex;
        setPagination({
            endIndex: endIndex,
            page: page,
            perPage: perPage,
            startIndex: startIndex,
        });
    };
    var filteredItems = useMemo(function () {
        return userProvidedInstanceTypes.filter(function (opt) {
            return isEmpty(searchInput) ||
                getName(opt).toLowerCase().includes(searchInput.toString().toLowerCase());
        });
    }, [searchInput, userProvidedInstanceTypes]);
    var _f = useInstanceTypeListColumns(filteredItems, pagination), columns = _f.columns, getSortType = _f.getSortType, sortedData = _f.sortedData;
    if (isAllNamespaces(activeNamespace) && isEmpty(userProvidedInstanceTypes)) {
        return (React.createElement(Bullseye, { className: 'instance-type-list__all-projects' }, t('Select a project in order to see user-provided InstanceTypes')));
    }
    return (React.createElement(React.Fragment, null,
        !isEmpty(userProvidedInstanceTypes) && (React.createElement(ActionList, { className: "instance-type-list__action-list" },
            React.createElement(ActionListItem, null,
                React.createElement(SearchInput, { "aria-label": "Filter menu items", className: "instance-type-list__search", onChange: function (_, value) { return setSearchInput(value); }, placeholder: t('Search by name...'), type: "search", value: searchInput })),
            React.createElement(ActionListItem, null,
                React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
                        return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                    }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
                        return onPaginationChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
                    }, className: "list-managment-group__pagination", isCompact: true, itemCount: filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage, perPageOptions: paginationDefaultValues })))),
        isEmpty(userProvidedInstanceTypes) || isEmpty(filteredItems) ? (React.createElement(UserProvidedInstanceTypesEmptyState, null)) : (React.createElement(Table, { variant: TableVariant.compact },
            React.createElement(Thead, null,
                React.createElement(Tr, null, columns.map(function (_a, columnIndex) {
                    var id = _a.id, title = _a.title;
                    return (React.createElement(Th, { key: id, sort: getSortType(columnIndex) }, title));
                }))),
            React.createElement(Tbody, null, sortedData.map(function (instanceType) {
                var _a, _b, _c;
                var itName = getName(instanceType);
                var itNamespace = getNamespace(instanceType);
                return (React.createElement(Tr, { isRowSelected: (selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name) === itName &&
                        (selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.namespace) === itNamespace, onRowClick: function () {
                        return setInstanceTypeVMState({
                            payload: { name: itName, namespace: itNamespace },
                            type: instanceTypeActionType.setSelectedInstanceType,
                        });
                    }, isClickable: true, isSelectable: true, key: itName },
                    React.createElement(Td, null,
                        React.createElement(ResourceLink, { groupVersionKind: groupVersionKindFromCommonResource(instanceType), linkTo: false, name: itName })),
                    React.createElement(Td, null,
                        React.createElement(Timestamp, { timestamp: (_a = instanceType === null || instanceType === void 0 ? void 0 : instanceType.metadata) === null || _a === void 0 ? void 0 : _a.creationTimestamp })),
                    React.createElement(Td, null, ((_c = (_b = instanceType === null || instanceType === void 0 ? void 0 : instanceType.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c.description) || NO_DATA_DASH)));
            }))))));
};
export default UserProvidedInstanceTypesList;
//# sourceMappingURL=UserProvidedInstanceTypeList.js.map