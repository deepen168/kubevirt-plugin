import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import GettingStartedSectionContents from '../utils/getting-started-content/GettingStartedSectionContents';
import FeatureHighlightsTitle from './FeatureHighlightsTitle';
import './FeatureHighlightsSection.scss';
var FeatureHighlightsSection = function () {
    var t = useKubevirtTranslation().t;
    var moreLink = {
        external: true,
        href: 'https://cloud.redhat.com/learn/topics/virtualization/',
        id: 'openshift-virtualization-feature-highlights',
        title: t('Visit the blog'),
    };
    var links = [
        {
            external: true,
            href: 'https://developers.redhat.com/articles/2024/03/13/save-memory-openshift-virtualization-using-free-page-reporting',
            id: 'item1',
            title: (React.createElement(FeatureHighlightsTitle, { readTime: t('8 min'), title: t('Save memory with OpenShift Virtualization using Free Page Reporting') })),
        },
        {
            external: true,
            href: 'https://docs.openshift.com/container-platform/4.16/virt/release_notes/virt-4-16-release-notes.html#virt-4-16-new',
            id: 'item2',
            title: (React.createElement(FeatureHighlightsTitle, { readTime: t('5 min'), title: t('OpenShift Virtualization 4.16 Highlights') })),
        },
    ];
    return (React.createElement(GettingStartedSectionContents, { description: t('Read about the latest information and key virtualization features on the Virtualization highlights.'), icon: React.createElement("i", { "aria-hidden": "true", className: "fas fa-blog", color: "var(--pf-global--primary-color--100)" }), id: "feature-highlights", links: links, moreLink: moreLink, title: t('Feature highlights'), titleColor: 'var(--co-global--palette--blue-400)' }));
};
export default FeatureHighlightsSection;
//# sourceMappingURL=FeatureHighlightsSection.js.map