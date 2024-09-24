import { useCallback, useMemo, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { columnSorting } from '@kubevirt-utils/utils/utils';
var useInstanceTypeListColumns = function (data, pagination) {
    var t = useKubevirtTranslation().t;
    var _a = useState(null), activeSortIndex = _a[0], setActiveSortIndex = _a[1];
    var _b = useState(null), activeSortDirection = _b[0], setActiveSortDirection = _b[1];
    var columns = useMemo(function () { return [
        {
            id: 'name',
            sort: 'metadata.name',
            title: t('Name'),
        },
        {
            id: 'created',
            sort: 'metadata.creationTimestamp',
            title: t('Created'),
        },
        {
            id: 'description',
            sort: 'metadata.annotations.description',
            title: t('Description'),
        },
    ]; }, [t]);
    var getSortType = useCallback(function (columnIndex) { return ({
        columnIndex: columnIndex,
        onSort: function (_event, index, direction) {
            setActiveSortIndex(index);
            setActiveSortDirection(direction);
        },
        sortBy: { direction: activeSortDirection, index: activeSortIndex },
    }); }, [activeSortDirection, activeSortIndex]);
    var sortedData = useMemo(function () {
        var _a;
        return columnSorting(data, activeSortDirection, pagination, (_a = columns[activeSortIndex]) === null || _a === void 0 ? void 0 : _a.sort);
    }, [activeSortDirection, activeSortIndex, columns, data, pagination]);
    return { columns: columns, getSortType: getSortType, sortedData: sortedData };
};
export default useInstanceTypeListColumns;
//# sourceMappingURL=useInstanceTypeListColumn.js.map