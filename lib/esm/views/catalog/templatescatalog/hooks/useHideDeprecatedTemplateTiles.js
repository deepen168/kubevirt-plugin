import { useEffect } from 'react';
import { CREATE_VM_TAB } from '@catalog/CreateVMHorizontalNav/constants';
import { CATALOG_FILTERS } from '@catalog/templatescatalog/utils/consts';
import { useURLParams } from '@kubevirt-utils/hooks/useURLParams';
import { HIDE_DEPRECATED_TEMPLATES } from '@kubevirt-utils/resources/template';
var useHideDeprecatedTemplateTiles = function (currentTab, onFilterChange) {
    var setParam = useURLParams().setParam;
    // This is to select the 'Hide deprecated templates' filter by default
    useEffect(function () {
        if (currentTab !== CREATE_VM_TAB.TEMPLATE)
            return null;
        onFilterChange(CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES, true);
        setParam(HIDE_DEPRECATED_TEMPLATES, 'true');
    }, [currentTab]);
};
export default useHideDeprecatedTemplateTiles;
//# sourceMappingURL=useHideDeprecatedTemplateTiles.js.map