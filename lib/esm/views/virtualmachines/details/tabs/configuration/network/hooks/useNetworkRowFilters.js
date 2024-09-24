import { useMemo } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { interfacesTypes } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { getNetworkInterfaceType } from '@kubevirt-utils/resources/vm/utils/network/selectors';
var useNetworkRowFilters = function () {
    var t = useKubevirtTranslation().t;
    var filters = useMemo(function () { return [
        {
            filter: function (interfaces, obj) {
                var _a, _b, _c;
                var drive = getNetworkInterfaceType(obj === null || obj === void 0 ? void 0 : obj.iface);
                return (((_a = interfaces.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                    ((_b = interfaces.selected) === null || _b === void 0 ? void 0 : _b.includes(drive)) ||
                    !((_c = interfaces === null || interfaces === void 0 ? void 0 : interfaces.all) === null || _c === void 0 ? void 0 : _c.find(function (item) { return item === drive; })));
            },
            filterGroupName: t('Interface Type'),
            items: Object.keys(interfacesTypes).map(function (type) { return ({
                id: type,
                title: interfacesTypes[type],
            }); }),
            reducer: function (obj) { return getNetworkInterfaceType(obj === null || obj === void 0 ? void 0 : obj.iface); },
            type: 'interface-type',
        },
    ]; }, [t]);
    return filters;
};
export default useNetworkRowFilters;
//# sourceMappingURL=useNetworkRowFilters.js.map