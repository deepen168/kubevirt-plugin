import { useMemo, useState } from 'react';
var useDiagnosticSort = function () {
    var _a = useState(0), activeSortIndex = _a[0], setActiveSortIndex = _a[1];
    var _b = useState('asc'), activeSortDirection = _b[0], setActiveSortDirection = _b[1];
    var _c = useState('reason'), activeSortColumn = _c[0], setActiveSortColumn = _c[1];
    var getSorting = function (column, columnIndex) { return ({
        columnIndex: columnIndex,
        onSort: function (_, index, direction) {
            setActiveSortIndex(index);
            setActiveSortColumn(column);
            setActiveSortDirection(direction);
        },
        sortBy: {
            defaultDirection: 'asc',
            direction: activeSortDirection,
            index: activeSortIndex,
        },
    }); };
    var sort = useMemo(function () { return ({
        column: activeSortColumn,
        direction: activeSortDirection,
        sortIndex: activeSortIndex,
    }); }, [activeSortColumn, activeSortDirection, activeSortIndex]);
    return { getSorting: getSorting, sort: sort };
};
export default useDiagnosticSort;
//# sourceMappingURL=useDiagnosticSort.js.map