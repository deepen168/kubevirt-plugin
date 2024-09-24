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
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { instanceTypeSeriesNameMapper } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/constants';
import { getInstanceTypePrefix } from '@kubevirt-utils/resources/bootableresources/helpers';
import { LABEL_USED_TEMPLATE_NAME, LABEL_USED_TEMPLATE_NAMESPACE, } from '@kubevirt-utils/resources/template';
export var getInstanceTypeSeriesLabel = function (instanceTypeName) {
    var seriesName = getInstanceTypePrefix(instanceTypeName);
    var seriesLabel = instanceTypeSeriesNameMapper[seriesName];
    return (seriesLabel === null || seriesLabel === void 0 ? void 0 : seriesLabel.seriesLabel) || instanceTypeName;
};
export var getChartData = function (resourceToVMCountMap) {
    var chartData = Array.from(resourceToVMCountMap).map(function (_a) {
        var resourceName = _a[0], data = _a[1];
        var name = data.isInstanceType ? getInstanceTypePrefix(resourceName) : resourceName;
        return {
            fill: data.color,
            x: name,
            y: data.percentage,
        };
    });
    return chartData;
};
export var getResourceLegendItems = function (resourceToVMCountMap) {
    var legendItems = Array.from(resourceToVMCountMap).map(function (_a) {
        var resourceName = _a[0], data = _a[1];
        var name = (data === null || data === void 0 ? void 0 : data.isInstanceType) ? getInstanceTypePrefix(resourceName) : resourceName;
        return __assign({ name: name }, data);
    });
    return legendItems;
};
export var getResourcesToVMCountMap = function (loaded, vms, type) {
    var resourcesToVMCountMap = new Map();
    var isTemplate = type === TemplateModel.kind;
    if (loaded) {
        vms.forEach(function (vm) {
            var _a, _b, _c, _d, _e, _f, _g;
            var template = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[LABEL_USED_TEMPLATE_NAME];
            var templateNamespace = (_d = (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.labels) === null || _d === void 0 ? void 0 : _d[LABEL_USED_TEMPLATE_NAMESPACE];
            var instanceType = (_f = (_e = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _e === void 0 ? void 0 : _e.instancetype) === null || _f === void 0 ? void 0 : _f.name;
            var resource = isTemplate ? template : instanceType;
            if (resource) {
                var newResourceName = isTemplate ? resource : getInstanceTypePrefix(resource);
                var value = resourcesToVMCountMap.has(newResourceName)
                    ? resourcesToVMCountMap.get(newResourceName).vmCount + 1
                    : 1;
                resourcesToVMCountMap.set(newResourceName, {
                    isInstanceType: Boolean((_g = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _g === void 0 ? void 0 : _g.instancetype),
                    templateNamespace: templateNamespace,
                    vmCount: value,
                });
            }
        });
        var totalPerResource = vmsPerResourceCount(resourcesToVMCountMap);
        for (var _i = 0, _a = resourcesToVMCountMap.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            var resourceChartData = resourcesToVMCountMap.get(key);
            var additionalData = {
                percentage: Math.round((100 / totalPerResource) * resourceChartData.vmCount),
            };
            resourcesToVMCountMap.set(key, __assign(__assign({}, resourceChartData), additionalData));
        }
    }
    return resourcesToVMCountMap;
};
export var vmsPerResourceCount = function (resourceToVMCountMap) { var _a; return (_a = __spreadArray([], resourceToVMCountMap === null || resourceToVMCountMap === void 0 ? void 0 : resourceToVMCountMap.values(), true)) === null || _a === void 0 ? void 0 : _a.reduce(function (total, _a) {
    var vmCount = _a.vmCount;
    return total + vmCount;
}, 0); };
//# sourceMappingURL=utils.js.map