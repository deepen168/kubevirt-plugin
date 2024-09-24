import { useMemo } from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
var useQuery = function () {
    var search = useLocation().search;
    return useMemo(function () { return new URLSearchParams(search); }, [search]);
};
export default useQuery;
//# sourceMappingURL=useQuery.js.map