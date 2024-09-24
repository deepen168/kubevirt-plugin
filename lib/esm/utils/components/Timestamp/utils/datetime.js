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
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { DAY, HOUR, JUST_NOW, MAX_CLOCK_SKEW_MS, MINTUE, MINUTE_IN_MS, TEN_AND_HALF_MINUTES_IN_MS, } from './constants';
var timeFormatterOptions = {
    hour: 'numeric',
    minute: 'numeric',
};
var dateFormatterNoYearOptions = {
    day: 'numeric',
    month: 'short',
};
var dateTimeFormatterOptions = {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
    year: 'numeric',
};
var utcDateTimeFormatterOptions = __assign(__assign({}, dateTimeFormatterOptions), { timeZone: 'UTC', timeZoneName: 'short' });
export var dateTimeFormatter = new Intl.DateTimeFormat(undefined, dateTimeFormatterOptions);
export var timeFormatter = new Intl.DateTimeFormat(undefined, timeFormatterOptions);
export var dateFormatterNoYear = new Intl.DateTimeFormat(undefined, dateFormatterNoYearOptions);
export var utcDateTimeFormatter = new Intl.DateTimeFormat(undefined, utcDateTimeFormatterOptions);
var relativeTimeFormatter = Intl.RelativeTimeFormat ? new Intl.RelativeTimeFormat() : null;
var getDuration = function (ms) {
    var miliseconds = ms;
    if (!ms || ms < 0) {
        miliseconds = 0;
    }
    var seconds = Math.floor(miliseconds / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    return { days: days, hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 };
};
export var isValid = function (dateTime) {
    return dateTime instanceof Date && !isNaN(dateTime.valueOf());
};
export var fromNow = function (dateTime, now, options) {
    // Check for null. If dateTime is null, it returns incorrect date Jan 1 1970.
    if (!dateTime) {
        return '-';
    }
    if (!now) {
        now = new Date();
    }
    var date = new Date(dateTime);
    var ms = now.getTime() - date.getTime();
    // If the event occurred less than one minute in the future, assume it's clock drift and show "Just now."
    if (!(options === null || options === void 0 ? void 0 : options.omitSuffix) && ms < MINUTE_IN_MS && ms > MAX_CLOCK_SKEW_MS) {
        return JUST_NOW;
    }
    // Do not attempt to handle other dates in the future.
    if (ms < 0) {
        return '-';
    }
    var _a = getDuration(ms), days = _a.days, hours = _a.hours, minutes = _a.minutes;
    if (options === null || options === void 0 ? void 0 : options.omitSuffix) {
        if (days) {
            return { time: DAY, value: days };
        }
        if (hours) {
            return { time: HOUR, value: hours };
        }
        return { time: MINTUE, value: minutes };
    }
    // Fallback to normal date/time formatting if Intl.RelativeTimeFormat is not
    // available. This is the case for older Safari versions.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#browser_compatibility
    if (!relativeTimeFormatter) {
        return dateTimeFormatter.format(date);
    }
    if (!days && !hours && !minutes) {
        return JUST_NOW;
    }
    if (days) {
        return relativeTimeFormatter.format(-days, DAY);
    }
    if (hours) {
        return relativeTimeFormatter.format(-hours, HOUR);
    }
    return relativeTimeFormatter.format(-minutes, MINTUE);
};
export var timestampFor = function (mdate, now, omitSuffix) {
    if (!isValid(mdate)) {
        return NO_DATA_DASH;
    }
    var timeDifference = now.getTime() - mdate.getTime();
    if (omitSuffix) {
        return fromNow(mdate, undefined, { omitSuffix: true });
    }
    // Show a relative time if within 10.5 minutes in the past from the current time.
    if (timeDifference > MAX_CLOCK_SKEW_MS && timeDifference < TEN_AND_HALF_MINUTES_IN_MS) {
        return fromNow(mdate);
    }
    // Apr 23, 2021, 4:33 PM
    return dateTimeFormatter.format(mdate);
};
//# sourceMappingURL=datetime.js.map