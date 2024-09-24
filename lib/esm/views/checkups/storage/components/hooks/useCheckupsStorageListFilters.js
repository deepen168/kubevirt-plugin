import { useListPageFilter } from '@openshift-console/dynamic-plugin-sdk';
import { filters } from '../../utils/filters';
var useCheckupsStorageListFilters = function (data) {
    var _a = useListPageFilter(data, filters), unfilterData = _a[0], dataFilters = _a[1], onFilterChange = _a[2];
    return [unfilterData, dataFilters, onFilterChange, filters];
};
export default useCheckupsStorageListFilters;
//# sourceMappingURL=useCheckupsStorageListFilters.js.map