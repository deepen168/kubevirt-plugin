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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { parseSize } from 'xbytes';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import { VENDOR_LABEL } from '@kubevirt-utils/constants/constants';
import { getAnnotation, getLabel, getName } from '@kubevirt-utils/resources/shared';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { initialMenuItems, INSTANCETYPE_CLASS_ANNOTATION, INSTANCETYPE_CLASS_DISPLAY_NAME, INSTANCETYPE_DESCRIPTION_ANNOTATION, instanceTypeSeriesNameMapper, REDHAT_COM, } from './constants';
var getRedHatInstanceTypeSeriesAndSize = function (instanceType) {
    var _a, _b, _c, _d;
    var _e = getName(instanceType).split('.'), seriesName = _e[0], sizeLabel = _e[1];
    var cpus = (_b = (_a = instanceType === null || instanceType === void 0 ? void 0 : instanceType.spec) === null || _a === void 0 ? void 0 : _a.cpu) === null || _b === void 0 ? void 0 : _b.guest;
    var memory = readableSizeUnit((_d = (_c = instanceType === null || instanceType === void 0 ? void 0 : instanceType.spec) === null || _c === void 0 ? void 0 : _c.memory) === null || _d === void 0 ? void 0 : _d.guest);
    var classAnnotation = getAnnotation(instanceType, INSTANCETYPE_CLASS_ANNOTATION, seriesName);
    var size = {
        cpus: cpus,
        memory: memory,
        sizeLabel: sizeLabel,
    };
    return {
        redHatITSeries: {
            classAnnotation: classAnnotation,
            classDisplayNameAnnotation: getAnnotation(instanceType, INSTANCETYPE_CLASS_DISPLAY_NAME, classAnnotation),
            descriptionAnnotation: getAnnotation(instanceType, INSTANCETYPE_DESCRIPTION_ANNOTATION),
            seriesName: seriesName,
            sizes: [size],
        },
        size: size,
    };
};
var hasRedHatSeriesSizeLabel = function (instanceType) {
    var _a, _b;
    var _c = getName(instanceType).split('.'), seriesName = _c[0], _d = _c[1], sizeLabel = _d === void 0 ? '' : _d;
    var rhInstanceTypeSize = (_b = (_a = instanceTypeSeriesNameMapper[seriesName]) === null || _a === void 0 ? void 0 : _a.possibleSizes) === null || _b === void 0 ? void 0 : _b.find(function (size) { return size === sizeLabel; });
    return !isEmpty(rhInstanceTypeSize);
};
export var isRedHatInstanceType = function (instanceType) {
    if (getLabel(instanceType, VENDOR_LABEL) !== REDHAT_COM)
        return false;
    return hasRedHatSeriesSizeLabel(instanceType);
};
export var getInstanceTypeMenuItems = function (instanceTypes) {
    if (isEmpty(instanceTypes))
        return initialMenuItems;
    var itemsData = instanceTypes.reduce(function (acc, it) {
        if (!isRedHatInstanceType(it)) {
            !acc.userProvided.items.includes(getName(it)) && acc.userProvided.items.push(getName(it));
            return acc;
        }
        var _a = getRedHatInstanceTypeSeriesAndSize(it), redHatITSeries = _a.redHatITSeries, size = _a.size;
        if (isEmpty(acc === null || acc === void 0 ? void 0 : acc.redHatProvided.items)) {
            acc.redHatProvided.items = [redHatITSeries];
            return acc;
        }
        var series = acc.redHatProvided.items.find(function (item) { return item.seriesName === redHatITSeries.seriesName; });
        if (!series) {
            acc.redHatProvided.items = __spreadArray(__spreadArray([], acc === null || acc === void 0 ? void 0 : acc.redHatProvided.items, true), [redHatITSeries], false);
            return acc;
        }
        var sizeNotExists = isEmpty(series.sizes.find(function (seriesSize) { return isEqualObject(size, seriesSize); }));
        sizeNotExists && series.sizes.push(size);
        return acc;
    }, initialMenuItems);
    itemsData.redHatProvided.items = itemsData.redHatProvided.items.map(function (series) { return (__assign(__assign({}, series), { sizes: series.sizes.sort(function (a, b) { return parseSize(a === null || a === void 0 ? void 0 : a.memory) - parseSize(b === null || b === void 0 ? void 0 : b.memory); }) })); });
    return itemsData;
};
//# sourceMappingURL=utils.js.map