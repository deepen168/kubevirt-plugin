import { useMemo } from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
var useIsSearchPage = function () {
    var location = useLocation();
    return useMemo(function () { var _a; return (_a = location === null || location === void 0 ? void 0 : location.pathname) === null || _a === void 0 ? void 0 : _a.includes('/search'); }, [location]);
};
export default useIsSearchPage;
//# sourceMappingURL=useIsSearchPage.js.map