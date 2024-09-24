import React from 'react';
import { DataListCell, DataListCheck, DataListItem, DataListItemCells, DataListItemRow, } from '@patternfly/react-core';
import { NAME_COLUMN_ID } from './constants';
var DataListRow = function (_a) {
    var checkedColumns = _a.checkedColumns, column = _a.column, disableUncheckedRow = _a.disableUncheckedRow, inputId = _a.inputId, onChange = _a.onChange;
    return (React.createElement(DataListItem, { "aria-labelledby": "table-column-management-item-".concat(column.id), className: "data-list-row-item pf-c-data-list__item--transparent-bg", key: column.id },
        React.createElement(DataListItemRow, null,
            React.createElement(DataListCheck, { isDisabled: (disableUncheckedRow && !checkedColumns.has(column.id)) || column.id === NAME_COLUMN_ID, "aria-labelledby": "table-column-management-item-".concat(column.id), checked: checkedColumns.has(column.id), id: inputId, name: column.title, onChange: onChange }),
            React.createElement(DataListItemCells, { dataListCells: [
                    React.createElement(DataListCell, { id: "table-column-management-item-".concat(column.id), key: column.id },
                        React.createElement("label", { className: "co-label--plain", htmlFor: inputId }, column.title)),
                ] }))));
};
export default DataListRow;
//# sourceMappingURL=DataListRow.js.map