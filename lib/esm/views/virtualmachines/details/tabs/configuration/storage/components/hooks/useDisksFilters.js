import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { diskTypesLabels } from '@kubevirt-utils/resources/vm/utils/disk/constants';
var useDisksFilters = function () {
    var t = useKubevirtTranslation().t;
    var filters = React.useMemo(function () { return [
        {
            filter: function (drives, obj) {
                var _a, _b, _c;
                var drive = obj === null || obj === void 0 ? void 0 : obj.drive;
                return (((_a = drives.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                    ((_b = drives.selected) === null || _b === void 0 ? void 0 : _b.includes(drive)) ||
                    !((_c = drives === null || drives === void 0 ? void 0 : drives.all) === null || _c === void 0 ? void 0 : _c.find(function (item) { return item === drive; })));
            },
            filterGroupName: t('Disk Type'),
            items: Object.keys(diskTypesLabels).map(function (type) { return ({
                id: diskTypesLabels[type],
                title: diskTypesLabels[type],
            }); }),
            reducer: function (obj) { return obj === null || obj === void 0 ? void 0 : obj.drive; },
            type: 'disk-type',
        },
    ]; }, [t]);
    return filters;
};
export default useDisksFilters;
//# sourceMappingURL=useDisksFilters.js.map