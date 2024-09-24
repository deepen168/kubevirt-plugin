import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HIDE_DEPRECATED_BOOTABLE_VOLUMES, HIDE_DEPRECATED_BOOTABLE_VOLUMES_LABEL, ISO, } from '@kubevirt-utils/resources/bootableresources/constants';
import { isBootableVolumeISO, isDeprecated, } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getName } from '@kubevirt-utils/resources/shared';
import { OS_NAMES } from '@kubevirt-utils/resources/template';
import { getItemNameWithOther } from '@kubevirt-utils/utils/utils';
import { getBootVolumeOS } from '../utils/utils';
var useBootVolumeFilters = function (isModal) {
    var t = useKubevirtTranslation().t;
    return [
        {
            filter: function (availableResourceNames, obj) { var _a; return ((_a = availableResourceNames === null || availableResourceNames === void 0 ? void 0 : availableResourceNames.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 || !isDeprecated(getName(obj)); },
            filterGroupName: ' ',
            items: [
                {
                    id: t('Hide deprecated bootable volumes'),
                    title: t('Hide deprecated bootable volumes'),
                },
            ],
            reducer: function (obj) { return isDeprecated(getName(obj)) && HIDE_DEPRECATED_BOOTABLE_VOLUMES_LABEL; },
            type: HIDE_DEPRECATED_BOOTABLE_VOLUMES,
        },
        {
            filter: function (availableOsNames, obj) {
                var _a, _b;
                return (((_a = availableOsNames === null || availableOsNames === void 0 ? void 0 : availableOsNames.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                    ((_b = availableOsNames === null || availableOsNames === void 0 ? void 0 : availableOsNames.selected) === null || _b === void 0 ? void 0 : _b.includes(getItemNameWithOther(getBootVolumeOS(obj), OS_NAMES))));
            },
            filterGroupName: t('Operating system'),
            items: OS_NAMES,
            reducer: function (obj) { return getItemNameWithOther(getBootVolumeOS(obj), OS_NAMES); },
            type: "osName".concat(isModal && '-modal'),
        },
        {
            filter: function (availableResourceNames, obj) {
                var _a, _b;
                return ((_a = availableResourceNames === null || availableResourceNames === void 0 ? void 0 : availableResourceNames.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                    ((_b = availableResourceNames === null || availableResourceNames === void 0 ? void 0 : availableResourceNames.selected) === null || _b === void 0 ? void 0 : _b.includes(obj === null || obj === void 0 ? void 0 : obj.kind));
            },
            filterGroupName: t('Resource'),
            items: [
                {
                    id: DataSourceModel.kind,
                    title: 'DS',
                },
            ],
            reducer: function (obj) { return obj === null || obj === void 0 ? void 0 : obj.kind; },
            type: "resourceKind".concat(isModal && '-modal'),
        },
        {
            filter: function (filters, obj) { var _a; return ((_a = filters === null || filters === void 0 ? void 0 : filters.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 || isBootableVolumeISO(obj); },
            filterGroupName: t('Type'),
            items: [
                {
                    id: ISO,
                    title: ISO,
                },
            ],
            reducer: function (obj) { return isBootableVolumeISO(obj) && ISO; },
            type: ISO,
        },
    ];
};
export default useBootVolumeFilters;
//# sourceMappingURL=useBootVolumeFilters.js.map