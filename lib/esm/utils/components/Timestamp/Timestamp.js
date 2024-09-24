import * as React from 'react';
import classnames from 'classnames';
import { pluralize, Tooltip } from '@patternfly/react-core';
import { GlobeAmericasIcon } from '@patternfly/react-icons';
import { isValid, timestampFor, utcDateTimeFormatter } from './utils/datetime';
var Timestamp = function (_a) {
    var className = _a.className, _b = _a.hideIcon, hideIcon = _b === void 0 ? false : _b, omitSuffix = _a.omitSuffix, timestamp = _a.timestamp;
    // Check for null. If props.timestamp is null, it returns incorrect date and time of Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
    if (!timestamp || !isValid(new Date(timestamp))) {
        return React.createElement("div", { className: "co-timestamp" }, "-");
    }
    var mdate = new Date(timestamp);
    var newTimestamp = timestampFor(mdate, new Date(Date.now()), omitSuffix);
    var timeStamp = omitSuffix
        ? pluralize(newTimestamp['value'], newTimestamp['time'])
        : newTimestamp;
    return (React.createElement("div", { className: classnames('co-timestamp', 'co-icon-and-text', className) },
        !hideIcon && React.createElement(GlobeAmericasIcon, { className: "co-icon-and-text__icon" }),
        React.createElement(Tooltip, { content: [
                React.createElement("span", { className: "co-nowrap", key: "co-timestamp" }, utcDateTimeFormatter.format(mdate)),
            ] },
            React.createElement("span", { "data-test": "timestamp" }, timeStamp))));
};
export default Timestamp;
//# sourceMappingURL=Timestamp.js.map