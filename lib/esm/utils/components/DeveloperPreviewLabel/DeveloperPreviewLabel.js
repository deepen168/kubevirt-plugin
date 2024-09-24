import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label, Popover } from '@patternfly/react-core';
import { InfoCircleIcon } from '@patternfly/react-icons';
import './DeveloperPreviewLabel.scss';
var DeveloperPreviewLabel = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Popover, { bodyContent: t('Developer preview features are not intended to use in production environments. The clusters deployed with the developer preview features are developmental clusters and are not currently supported by Red Hat.') },
        React.createElement(Label, { className: "dev-preview-label", icon: React.createElement(InfoCircleIcon, null), isCompact: true }, t('Developer preview'))));
};
export default DeveloperPreviewLabel;
//# sourceMappingURL=DeveloperPreviewLabel.js.map