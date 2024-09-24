import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';
import './metadata-tab-labels.scss';
var MetadataTabLabels = function (_a) {
    var _b;
    var labels = _a.labels;
    return (React.createElement(LabelGroup, { className: "MetadataTabLabels-labels-group", numLabels: 10 }, (_b = Object.keys(labels || {})) === null || _b === void 0 ? void 0 : _b.map(function (key) { return (React.createElement(Label, { key: key }, labels[key] ? "".concat(key, "=").concat(labels[key]) : key)); })));
};
export default MetadataTabLabels;
//# sourceMappingURL=MetadataTabLabels.js.map