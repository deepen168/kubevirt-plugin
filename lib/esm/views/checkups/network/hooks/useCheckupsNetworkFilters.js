import { useListPageFilter } from '@openshift-console/dynamic-plugin-sdk';
import { filters } from '../utils/filters';
var useCheckupsNetworkFilters = function (data) {
    var _a = useListPageFilter(data, filters), unfilterData = _a[0], dataFilters = _a[1], onFilterChange = _a[2];
    return [unfilterData, dataFilters, onFilterChange, filters];
};
export default useCheckupsNetworkFilters;
//# sourceMappingURL=useCheckupsNetworkFilters.js.map