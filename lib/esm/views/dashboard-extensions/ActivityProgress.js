import React from 'react';
import { Progress, ProgressSize } from '@patternfly/react-core';
var ActivityProgress = function (_a) {
    var children = _a.children, progress = _a.progress, title = _a.title;
    return (React.createElement(React.Fragment, null,
        React.createElement(Progress, { className: "co-activity-item__progress", size: ProgressSize.sm, title: title, value: progress }),
        React.createElement("div", null, children)));
};
export default ActivityProgress;
//# sourceMappingURL=ActivityProgress.js.map