import React from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { DEV_PREVIEW_LINK, TECH_PREVIEW_LINK } from '@kubevirt-utils/constants/url-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Popover, PopoverPosition, Stack } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
var PreviewFeaturesPopover = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Popover, { bodyContent: React.createElement(Stack, { hasGutter: true },
            React.createElement("p", null,
                React.createElement(ExternalLink, { href: DEV_PREVIEW_LINK, text: t('Developer Preview') })),
            React.createElement("p", null,
                React.createElement(ExternalLink, { href: TECH_PREVIEW_LINK, text: t('Technology Preview') }))), className: "preview-features-popover", headerContent: React.createElement(React.Fragment, null, t('Preview features')), maxWidth: "550px", position: PopoverPosition.right },
        React.createElement(HelpIcon, { className: "preview-features-popover__icon" })));
};
export default PreviewFeaturesPopover;
//# sourceMappingURL=PreviewFeaturesPopover.js.map