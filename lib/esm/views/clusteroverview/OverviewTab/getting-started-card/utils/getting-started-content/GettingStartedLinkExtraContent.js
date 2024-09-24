import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import './GettingStartedLinkExtraContent.scss';
var GettingStartedLinkExtraContent = function (_a) {
    var link = _a.link;
    var ExtraLink = null;
    if (link === null || link === void 0 ? void 0 : link.secondaryLinkHref) {
        ExtraLink = (link === null || link === void 0 ? void 0 : link.secondaryLinkExternal) ? (React.createElement(ExternalLink, { className: "getting-started-link-extra-content__more-block--link", href: link === null || link === void 0 ? void 0 : link.secondaryLinkHref, text: link === null || link === void 0 ? void 0 : link.secondaryLinkText })) : (React.createElement(Link, { to: link === null || link === void 0 ? void 0 : link.secondaryLinkHref }, link === null || link === void 0 ? void 0 : link.secondaryLinkText));
    }
    return (React.createElement("div", { className: "getting-started-link-extra-content--more-block" }, link === null || link === void 0 ? void 0 :
        link.description,
        (link === null || link === void 0 ? void 0 : link.showSecondaryLink) && ExtraLink));
};
export default GettingStartedLinkExtraContent;
//# sourceMappingURL=GettingStartedLinkExtraContent.js.map