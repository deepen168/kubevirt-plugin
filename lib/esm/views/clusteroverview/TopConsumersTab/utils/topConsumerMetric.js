var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import DropdownEnum from '@kubevirt-utils/utils/dropdownEnum';
import { ObjectEnum } from '@kubevirt-utils/utils/ObjectEnum';
var TopConsumerMetricObjectEnum = /** @class */ (function (_super) {
    __extends(TopConsumerMetricObjectEnum, _super);
    function TopConsumerMetricObjectEnum(value, _a) {
        var chartLabel = _a.chartLabel, dropdownLabel = _a.dropdownLabel;
        var _this = _super.call(this, value, { dropdownLabel: dropdownLabel }) || this;
        _this.getChartLabel = function () { return _this.chartLabel; };
        _this.dropdownLabel = dropdownLabel;
        _this.chartLabel = chartLabel;
        return _this;
    }
    return TopConsumerMetricObjectEnum;
}(DropdownEnum));
var TopConsumerMetric = /** @class */ (function (_super) {
    __extends(TopConsumerMetric, _super);
    function TopConsumerMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopConsumerMetric.CPU = new TopConsumerMetric('cpu', {
        chartLabel: 'CPU',
        dropdownLabel: 'By CPU',
    });
    TopConsumerMetric.MEMORY = new TopConsumerMetric('memory', {
        chartLabel: 'Memory',
        dropdownLabel: 'By memory',
    });
    TopConsumerMetric.MEMORY_SWAP_TRAFFIC = new TopConsumerMetric('memory-swap-traffic', {
        chartLabel: 'Memory swap traffic',
        dropdownLabel: 'By memory swap traffic',
    });
    TopConsumerMetric.STORAGE_IOPS = new TopConsumerMetric('storage-iops', {
        chartLabel: 'Storage IOPS',
        dropdownLabel: 'By IOPS',
    });
    TopConsumerMetric.STORAGE_THROUGHPUT = new TopConsumerMetric('storage-throughput', {
        chartLabel: 'Storage throughput',
        dropdownLabel: 'By throughput',
    });
    TopConsumerMetric.VCPU_WAIT = new TopConsumerMetric('vcpu-wait', {
        chartLabel: 'vCPU wait',
        dropdownLabel: 'By vCPU wait',
    });
    TopConsumerMetric.all = Object.freeze(ObjectEnum.getAllClassEnumProperties(TopConsumerMetric));
    TopConsumerMetric.dropdownLabelMapper = TopConsumerMetric.all.reduce(function (accumulator, metric) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[metric.dropdownLabel] = metric, _a)));
    }, {});
    TopConsumerMetric.fromDropdownLabel = function (dropdownLabel) {
        return TopConsumerMetric.dropdownLabelMapper[dropdownLabel];
    };
    TopConsumerMetric.fromString = function (source) { return TopConsumerMetric.stringMapper[source]; };
    TopConsumerMetric.getAll = function () { return TopConsumerMetric.all; };
    TopConsumerMetric.stringMapper = TopConsumerMetric.all.reduce(function (accumulator, metric) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[metric.value] = metric, _a)));
    }, {});
    return TopConsumerMetric;
}(TopConsumerMetricObjectEnum));
export { TopConsumerMetric };
//# sourceMappingURL=topConsumerMetric.js.map