import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { Button } from '@patternfly/react-core';
var GettingStartedMoreLinkContent = function (_a) {
    var moreLink = _a.moreLink;
    if (!moreLink) {
        return null;
    }
    if (moreLink === null || moreLink === void 0 ? void 0 : moreLink.onClick) {
        var handleClick = moreLink.onClick;
        return (React.createElement(Button, { "data-test": "item ".concat(moreLink.id), isInline: true, onClick: handleClick, variant: "link" }, moreLink.title));
    }
    if (moreLink === null || moreLink === void 0 ? void 0 : moreLink.external) {
        return (React.createElement("a", { className: "co-external-link", "data-test": "item ".concat(moreLink.id), href: moreLink.href, rel: "noopener noreferrer", target: "_blank" }, moreLink.title));
    }
    return (React.createElement(Link, { "data-test": "item ".concat(moreLink.id), to: moreLink.href }, moreLink.title));
};
export default GettingStartedMoreLinkContent;
//# sourceMappingURL=GettingStartedMoreLinkContent.js.map