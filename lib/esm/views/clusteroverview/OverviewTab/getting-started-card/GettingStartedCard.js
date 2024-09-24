import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import FeatureHighlightsSection from './feature-highlights-section/FeatureHighlightsSection';
import QuickStartsSection from './quick-starts-section/QuickStartsSection';
import RelatedOperatorsSection from './related-operators-section/RelatedOperatorsSection';
import { GettingStartedGrid } from './utils/getting-started-grid/GettingStartedGrid';
import './GettingStartedCard.scss';
var GettingStartedCard = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "kv-overview-getting-started-section" },
        React.createElement(GettingStartedGrid, null,
            React.createElement(QuickStartsSection, { description: t('Learn how to create, import, and run virtual machines on OpenShift with step-by-step instructions and tasks.'), featured: ['explore-pipelines', 'connect-ext-net-to-vm', 'create-rhel-vm'], filter: function (qs) { return ['creating-virtual-machine-from-volume'].includes(qs.metadata.name); }, title: t('Quick Starts') }),
            React.createElement(FeatureHighlightsSection, null),
            React.createElement(RelatedOperatorsSection, null))));
};
export default GettingStartedCard;
//# sourceMappingURL=GettingStartedCard.js.map