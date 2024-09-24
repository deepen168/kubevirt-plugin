import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Badge, Split, SplitItem } from '@patternfly/react-core';
import './TemplateRowAvailableSource.scss';
// Component for VM Template's Boot source availability column
var TemplateRowAvailableSource = function (_a) {
    var isBootSourceAvailable = _a.isBootSourceAvailable, source = _a.source;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Split, { hasGutter: true },
        React.createElement(SplitItem, { className: "template-row-available-source__source" }, source),
        isBootSourceAvailable && (React.createElement(SplitItem, null,
            React.createElement(Badge, { key: "available-boot" }, t('Source available'))))));
};
export default TemplateRowAvailableSource;
//# sourceMappingURL=TemplateRowAvailableSource.js.map