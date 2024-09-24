import { useEffect, useState } from 'react';
import { debounce } from '@kubevirt-utils/utils/debounce';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import useQuery from '@virtualmachines/details/tabs/metrics/NetworkCharts/hook/useQuery';
import useDeepCompareMemoize from '../useDeepCompareMemoize/useDeepCompareMemoize';
var updateQueryString = function (setQueryString) {
    return debounce(function (url) { return setQueryString(function (prevQuery) { return (prevQuery !== url ? url : prevQuery); }); }, 700);
};
var useKubevirtDataPodFilters = function (filters) {
    var _a = useState(''), queryString = _a[0], setQueryString = _a[1];
    var query = useQuery();
    var filtersCompared = useDeepCompareMemoize(filters);
    useEffect(function () {
        var url = new URLSearchParams();
        for (var _i = 0, _a = query.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var valueReplaced = value === 'No InstanceType' || value === 'None' ? null : value;
            (filtersCompared === null || filtersCompared === void 0 ? void 0 : filtersCompared[key]) && url.set(filtersCompared === null || filtersCompared === void 0 ? void 0 : filtersCompared[key], valueReplaced);
        }
        var urlString = url.toString();
        (!isEmpty(urlString) || !isEmpty(queryString)) && updateQueryString(setQueryString)(urlString);
    }, [filtersCompared, query, queryString]);
    return queryString;
};
export default useKubevirtDataPodFilters;
//# sourceMappingURL=useKubevirtDataPodFilters.js.map