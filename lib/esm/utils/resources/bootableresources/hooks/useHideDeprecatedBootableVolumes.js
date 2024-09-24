import { useEffect } from 'react';
import { CREATE_VM_TAB } from '@catalog/CreateVMHorizontalNav/constants';
import { useURLParams } from '@kubevirt-utils/hooks/useURLParams';
import { HIDE_DEPRECATED_BOOTABLE_VOLUMES, HIDE_DEPRECATED_BOOTABLE_VOLUMES_LABEL, } from '@kubevirt-utils/resources/bootableresources/constants';
var useHideDeprecatedBootableVolumes = function (onFilterChange, currentTab) {
    var setParam = useURLParams().setParam;
    useEffect(function () {
        if (currentTab !== CREATE_VM_TAB.INSTANCE_TYPES && currentTab !== undefined)
            return null;
        // This is to select the 'Hide deprecated bootable volumes' filter by default
        onFilterChange(HIDE_DEPRECATED_BOOTABLE_VOLUMES, {
            all: [HIDE_DEPRECATED_BOOTABLE_VOLUMES],
            selected: [HIDE_DEPRECATED_BOOTABLE_VOLUMES],
        });
        setParam("rowFilter-".concat(HIDE_DEPRECATED_BOOTABLE_VOLUMES), HIDE_DEPRECATED_BOOTABLE_VOLUMES_LABEL);
    }, [currentTab]);
};
export default useHideDeprecatedBootableVolumes;
//# sourceMappingURL=useHideDeprecatedBootableVolumes.js.map