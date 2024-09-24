import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom-v5-compat';
import { TEXT_FILTER_LABELS_ID, TEXT_FILTER_NAME_ID } from './constants';
var useSelectedFilters = function (rowFilters, searchFilters) {
    var searchParams = useSearchParams()[0];
    return useMemo(function () {
        var selectedFilters = rowFilters.map(function (filter) {
            return searchParams.get("rowFilter-".concat(filter.type)) ? filter.type : null;
        });
        selectedFilters.push.apply(selectedFilters, (searchFilters || []).map(function (filter) {
            return searchParams.get(filter.type) ? filter.type : null;
        }));
        searchParams.get(TEXT_FILTER_NAME_ID) && selectedFilters.push(TEXT_FILTER_NAME_ID);
        searchParams.get(TEXT_FILTER_LABELS_ID) && selectedFilters.push(TEXT_FILTER_LABELS_ID);
        return selectedFilters.filter(function (f) { return Boolean(f); });
    }, [searchParams, searchFilters, rowFilters]);
};
export default useSelectedFilters;
//# sourceMappingURL=useSelectedFilters.js.map