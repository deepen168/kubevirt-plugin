import React from 'react';
import SectionWithSwitch from '@kubevirt-utils/components/SectionWithSwitch/SectionWithSwitch';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Stack, StackItem, Title } from '@patternfly/react-core';
import usePreviewFeaturesData from './hooks/usePreviewFeaturesData';
import PreviewFeaturesPopover from './PreviewFeaturesPopover';
import './PreviewFeatures.scss';
var PreviewFeaturesTab = function () {
    var t = useKubevirtTranslation().t;
    var features = usePreviewFeaturesData().features;
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { headingLevel: "h5" },
            t('Preview features'),
            React.createElement(PreviewFeaturesPopover, null)),
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, { isFilled: true }, t('Preview features are for testing purposes and should not be used in production environments.')),
            features.map(function (feature) { return (React.createElement(StackItem, { isFilled: true, key: feature.id },
                React.createElement(SectionWithSwitch, { externalLink: feature.externalLink, id: feature.id, maxWidth: "350px", switchIsOn: feature.featureEnabled, title: feature.label, turnOnSwitch: feature.toggleFeature }))); }))));
};
export default PreviewFeaturesTab;
//# sourceMappingURL=PreviewFeaturesTab.js.map