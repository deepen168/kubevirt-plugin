var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { INSTANCETYPE_CLASS_DISPLAY_NAME, INSTANCETYPE_DESCRIPTION_ANNOTATION, REDHAT_COM, } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/constants';
import { VENDOR_LABEL } from '@kubevirt-utils/constants/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAnnotation, getLabel } from '@kubevirt-utils/resources/shared';
export var getInstanceTypeItemSizePrettyDisplay = function (it) {
    var _a, _b, _c, _d;
    return "".concat(it === null || it === void 0 ? void 0 : it.metadata.name.split('.').pop(), ": ").concat((_b = (_a = it === null || it === void 0 ? void 0 : it.spec) === null || _a === void 0 ? void 0 : _a.cpu) === null || _b === void 0 ? void 0 : _b.guest, " ").concat(t('CPUs'), ", ").concat((_d = (_c = it === null || it === void 0 ? void 0 : it.spec) === null || _c === void 0 ? void 0 : _c.memory) === null || _d === void 0 ? void 0 : _d.guest, " ").concat(t('Memory'));
};
export var getInstanceTypeClassDisplayAnnotation = function (instanceType) {
    return getAnnotation(instanceType, INSTANCETYPE_CLASS_DISPLAY_NAME);
};
export var getInstanceTypeDescriptionAnnotation = function (instanceType) {
    return getAnnotation(instanceType, INSTANCETYPE_DESCRIPTION_ANNOTATION);
};
export var getInstanceTypeSeriesAndSize = function (instanceType) {
    var _a, _b;
    var _c = (_b = (_a = instanceType === null || instanceType === void 0 ? void 0 : instanceType.metadata) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.split('.'), series = _c[0], size = _c[1];
    return { series: series, size: size };
};
export var mappedInstanceTypesToSelectOptions = function (instanceTypes) {
    return instanceTypes.reduce(function (acc, it) {
        var _a;
        var _b;
        if (getLabel(it, VENDOR_LABEL) === REDHAT_COM) {
            var _c = getInstanceTypeSeriesAndSize(it), series = _c.series, size = _c.size;
            acc[series] = __assign(__assign({}, (acc[series] || {})), { descriptionSeries: getInstanceTypeDescriptionAnnotation(it), displayNameSeries: getInstanceTypeClassDisplayAnnotation(it), sizes: __assign(__assign({}, (((_b = acc === null || acc === void 0 ? void 0 : acc[series]) === null || _b === void 0 ? void 0 : _b.sizes) || {})), (_a = {}, _a[size] = {
                    instanceType: it,
                    prettyDisplaySize: getInstanceTypeItemSizePrettyDisplay(it),
                    series: series,
                    seriesDisplayName: getInstanceTypeClassDisplayAnnotation(it),
                    size: size,
                }, _a)) });
        }
        return acc;
    }, {});
};
export var getInstanceTypesPrettyDisplaySize = function (mappedInstanceTypes, instanceTypeSeries, instanceTypeSize) { var _a, _b; return (_b = (_a = mappedInstanceTypes === null || mappedInstanceTypes === void 0 ? void 0 : mappedInstanceTypes[instanceTypeSeries]) === null || _a === void 0 ? void 0 : _a.sizes[instanceTypeSize]) === null || _b === void 0 ? void 0 : _b.prettyDisplaySize; };
export var getInstanceTypesSizes = function (mappedInstanceTypes, series) {
    var matchedSeries = Object.values(mappedInstanceTypes).find(function (it) { return it.displayNameSeries === series; });
    return Object.values(matchedSeries === null || matchedSeries === void 0 ? void 0 : matchedSeries.sizes);
};
export var getInstanceTypeSeriesDisplayName = function (mappedInstanceTypes, instanceTypeSeries) { var _a; return (_a = mappedInstanceTypes === null || mappedInstanceTypes === void 0 ? void 0 : mappedInstanceTypes[instanceTypeSeries]) === null || _a === void 0 ? void 0 : _a.displayNameSeries; };
export var getInstanceTypeFromSeriesAndSize = function (mappedInstanceTypes, instanceTypeSeries, instanceTypeSize) {
    var instanceTypesSeries = Object.values(mappedInstanceTypes);
    var matchedSeries = instanceTypesSeries.find(function (series) { return series.displayNameSeries === instanceTypeSeries; });
    var matchedSize = Object.values(matchedSeries === null || matchedSeries === void 0 ? void 0 : matchedSeries.sizes).find(function (size) { return size.prettyDisplaySize === instanceTypeSize; });
    return matchedSize === null || matchedSize === void 0 ? void 0 : matchedSize.instanceType;
};
//# sourceMappingURL=util.js.map