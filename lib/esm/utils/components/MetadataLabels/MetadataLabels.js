import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { modelToRef } from '@kubevirt-ui/kubevirt-api/console';
import { Label, LabelGroup } from '@patternfly/react-core';
import './MetadataLabels.scss';
var MetadataLabels = function (_a) {
    var _b;
    var labels = _a.labels, model = _a.model;
    var modelRef = modelToRef(model);
    return (React.createElement(LabelGroup, { className: "metadata-labels-group", numLabels: 10 }, (_b = Object.keys(labels || {})) === null || _b === void 0 ? void 0 : _b.map(function (key) {
        var labelText = labels[key] ? "".concat(key, "=").concat(labels[key]) : key;
        return (React.createElement(Label, { className: "co-label", key: key },
            React.createElement(Link, { className: "pf-v5-c-label__content", to: "/search?kind=".concat(modelRef, "&q=").concat(encodeURIComponent(labelText)) }, labelText)));
    })));
};
export default MetadataLabels;
//# sourceMappingURL=MetadataLabels.js.map