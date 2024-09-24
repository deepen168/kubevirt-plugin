import * as React from 'react';
import { useContext } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { QuickStartsLoader } from '@openshift-console/dynamic-plugin-sdk-internal';
import { QuickStartContext, } from '@patternfly/quickstarts';
import { RouteIcon } from '@patternfly/react-icons';
import GettingStartedSectionContents from '../utils/getting-started-content/GettingStartedSectionContents';
import { orderQuickStarts } from './utils';
var QuickStartsSection = function (_a) {
    var description = _a.description, featured = _a.featured, filter = _a.filter, title = _a.title;
    var t = useKubevirtTranslation().t;
    var _b = useContext(QuickStartContext), allQuickStartStates = _b.allQuickStartStates, setActiveQuickStart = _b.setActiveQuickStart;
    return (React.createElement(QuickStartsLoader, null, function (quickStarts, loaded) {
        var orderedQuickStarts = orderQuickStarts(quickStarts, allQuickStartStates, featured, filter);
        var slicedQuickStarts = orderedQuickStarts.slice(0, 2);
        if (loaded && slicedQuickStarts.length === 0) {
            return null;
        }
        var links = loaded
            ? slicedQuickStarts.map(function (quickStart) { return ({
                id: quickStart.metadata.name,
                onClick: function () {
                    setActiveQuickStart(quickStart.metadata.name, quickStart.spec.tasks.length);
                },
                title: quickStart.spec.displayName,
            }); })
            : featured === null || featured === void 0 ? void 0 : featured.map(function (name) { return ({
                id: name,
                loading: true,
            }); });
        var moreLink = {
            href: '/quickstart',
            id: 'all-quick-starts',
            title: t('View all quick starts'),
        };
        return (React.createElement(GettingStartedSectionContents, { description: description ||
                t('Follow guided documentation to build applications and familiarize yourself with key features.'), icon: React.createElement(RouteIcon, { "aria-hidden": "true", color: "var(--co-global--palette--purple-600)" }), id: "quick-start", links: links, moreLink: moreLink, title: title || t('Build with guided documentation'), titleColor: 'var(--co-global--palette--purple-700)' }));
    }));
};
export default QuickStartsSection;
//# sourceMappingURL=QuickStartsSection.js.map