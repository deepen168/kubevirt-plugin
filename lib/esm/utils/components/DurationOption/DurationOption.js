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
export var ONE_SECOND = 1000;
export var ONE_MINUTE = 60 * ONE_SECOND;
export var FIVE_MIN = 5 * ONE_MINUTE;
export var FIFTEEN_MIN = 3 * FIVE_MIN;
export var THIRTY_MIN = 2 * FIFTEEN_MIN;
export var ONE_HOUR = 60 * ONE_MINUTE;
export var THREE_HOURS = 3 * ONE_HOUR;
export var FOUR_HOURS = 4 * ONE_HOUR;
export var SIX_HOURS = 2 * THREE_HOURS;
export var TWELVE_HOURS = 2 * SIX_HOURS;
export var ONE_DAY = 2 * TWELVE_HOURS;
export var TWO_DAYS = 2 * ONE_DAY;
export var ONE_WEEK = 7 * ONE_DAY;
var mapperDuration = {
    '12h': TWELVE_HOURS,
    '15m': FIFTEEN_MIN,
    '1d': ONE_DAY,
    '1h': ONE_HOUR,
    '1w': ONE_WEEK,
    '2d': TWO_DAYS,
    '30m': THIRTY_MIN,
    '3h': THREE_HOURS,
    '4h': FOUR_HOURS,
    '5m': FIVE_MIN,
    '6h': SIX_HOURS,
};
var getDurationMilliseconds = function (duration) { return (mapperDuration === null || mapperDuration === void 0 ? void 0 : mapperDuration[duration]) || (mapperDuration === null || mapperDuration === void 0 ? void 0 : mapperDuration['5m']); };
var DurationOption = /** @class */ (function (_super) {
    __extends(DurationOption, _super);
    function DurationOption(value, _a) {
        var dropdownLabel = _a.dropdownLabel;
        var _this = _super.call(this, value, { dropdownLabel: dropdownLabel }) || this;
        _this.millisecondsTime = getDurationMilliseconds(value);
        return _this;
    }
    DurationOption.FIFTEEN_MIN = new DurationOption('15m', {
        dropdownLabel: 'Last 15 minutes',
    });
    DurationOption.FIVE_MIN = new DurationOption('5m', {
        dropdownLabel: 'Last 5 minutes',
    });
    DurationOption.ONE_DAY = new DurationOption('1d', {
        dropdownLabel: 'Last 1 day',
    });
    DurationOption.ONE_HOUR = new DurationOption('1h', {
        dropdownLabel: 'Last 1 hour',
    });
    DurationOption.ONE_WEEK = new DurationOption('1w', {
        dropdownLabel: 'Last 1 week',
    });
    DurationOption.SIX_HOURS = new DurationOption('6h', {
        dropdownLabel: 'Last 6 hours',
    });
    DurationOption.THIRTY_MIN = new DurationOption('30m', {
        dropdownLabel: 'Last 30 minutes',
    });
    DurationOption.THREE_HOURS = new DurationOption('3h', {
        dropdownLabel: 'Last 3 hours',
    });
    DurationOption.TWELVE_HOURS = new DurationOption('12h', {
        dropdownLabel: 'Last 12 hours',
    });
    DurationOption.TWO_DAYS = new DurationOption('2d', {
        dropdownLabel: 'Last 2 day',
    });
    DurationOption.all = Object.freeze(ObjectEnum.getAllClassEnumProperties(DurationOption));
    DurationOption.dropdownLabelMapper = DurationOption.all.reduce(function (accumulator, durationOption) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[durationOption.dropdownLabel] = durationOption, _a)));
    }, {});
    DurationOption.fromDropdownLabel = function (dropdownLabel) {
        return DurationOption.dropdownLabelMapper[dropdownLabel];
    };
    DurationOption.fromString = function (source) { return DurationOption.stringMapper[source]; };
    DurationOption.getAll = function () { return DurationOption.all; };
    DurationOption.getMilliseconds = function (duration) { var _a, _b; return (_b = (_a = DurationOption.stringMapper) === null || _a === void 0 ? void 0 : _a[duration]) === null || _b === void 0 ? void 0 : _b.millisecondsTime; };
    DurationOption.stringMapper = DurationOption.all.reduce(function (accumulator, durationOption) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[durationOption.value] = durationOption, _a)));
    }, {});
    return DurationOption;
}(DropdownEnum));
export default DurationOption;
//# sourceMappingURL=DurationOption.js.map