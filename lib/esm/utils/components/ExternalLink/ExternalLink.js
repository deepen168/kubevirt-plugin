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
import React from 'react';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
var ExternalLink = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, dataTestID = _a.dataTestID, href = _a.href, stopPropagation = _a.stopPropagation, text = _a.text;
    return (React.createElement("a", __assign({ className: className, "data-test-id": dataTestID, href: href, rel: "noopener noreferrer", target: "_blank" }, (stopPropagation ? { onClick: function (e) { return e.stopPropagation(); } } : {})),
        children || text,
        " ",
        React.createElement(ExternalLinkAltIcon, null)));
};
export default ExternalLink;
//# sourceMappingURL=ExternalLink.js.map