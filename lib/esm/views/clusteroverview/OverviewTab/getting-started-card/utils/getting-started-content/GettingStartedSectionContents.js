import * as React from 'react';
import { Flex, FlexItem, SimpleList, SimpleListItem, Skeleton, Text, TextVariants, Title, TitleSizes, } from '@patternfly/react-core';
import GettingStartedLinkExtraContent from './GettingStartedLinkExtraContent';
import GettingStartedMoreLinkContent from './GettingStartedMoreLinkContent';
import { getLinkComponent } from './utils';
import './GettingStartedSectionContents.scss';
var GettingStartedSectionContents = function (_a) {
    var description = _a.description, icon = _a.icon, id = _a.id, links = _a.links, moreLink = _a.moreLink, title = _a.title, titleColor = _a.titleColor;
    return (React.createElement(Flex, { className: "getting-started-section-contents", "data-test": "card ".concat(id), direction: { default: 'column' }, grow: { default: 'grow' } },
        React.createElement(Title, { "data-test": "title", headingLevel: "h3", size: TitleSizes.md, style: { color: titleColor } },
            icon ? React.createElement("span", { className: "getting-started-section-contents__title-icon" }, icon) : null,
            title),
        description ? (React.createElement(Text, { component: TextVariants.small, "data-test": "description" }, description)) : null,
        React.createElement(Flex, { direction: { default: 'column' }, grow: { default: 'grow' } }, (links === null || links === void 0 ? void 0 : links.length) > 0 ? (React.createElement(SimpleList, { className: "getting-started-section-contents__list", isControlled: false }, links.map(function (link) {
            var handleClick = link.onClick;
            return link.loading ? (React.createElement("li", { key: link.id },
                React.createElement(Skeleton, { fontSize: "sm" }))) : (React.createElement("span", { key: link.id },
                React.createElement(SimpleListItem, { componentProps: link.external
                        ? {
                            'data-test': "item ".concat(link.id),
                            href: link.href,
                            rel: 'noopener noreferrer',
                            target: '_blank',
                        }
                        : {
                            'data-test': "item ".concat(link.id),
                            to: link.href,
                        }, component: getLinkComponent(link), componentClassName: link.external ? 'co-external-link' : 'co-goto-arrow', href: link.href, onClick: handleClick }, link.title),
                React.createElement(GettingStartedLinkExtraContent, { link: link })));
        }))) : null),
        React.createElement(FlexItem, null,
            React.createElement(GettingStartedMoreLinkContent, { moreLink: moreLink }))));
};
export default GettingStartedSectionContents;
//# sourceMappingURL=GettingStartedSectionContents.js.map