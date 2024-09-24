import { useEffect } from 'react';
import { useURLParams } from '@kubevirt-utils/hooks/useURLParams';
import { HIDE_DEPRECATED_TEMPLATES, HIDE_DEPRECATED_TEMPLATES_KEY, } from '@kubevirt-utils/resources/template';
var useHideDeprecatedTemplates = function (onFilterChange) {
    var setParam = useURLParams().setParam;
    useEffect(function () {
        // This is to select the 'Hide deprecated templates' filter by default
        onFilterChange(HIDE_DEPRECATED_TEMPLATES, {
            all: [HIDE_DEPRECATED_TEMPLATES],
            selected: [HIDE_DEPRECATED_TEMPLATES],
        });
        setParam("rowFilter-".concat(HIDE_DEPRECATED_TEMPLATES), HIDE_DEPRECATED_TEMPLATES_KEY);
    }, []);
};
export default useHideDeprecatedTemplates;
//# sourceMappingURL=useHideDeprecatedTemplates.js.map