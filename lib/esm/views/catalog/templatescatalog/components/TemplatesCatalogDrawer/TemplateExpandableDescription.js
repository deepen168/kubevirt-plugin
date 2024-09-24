import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ExpandableSection, Stack, StackItem } from '@patternfly/react-core';
var TemplateExpandableDescription = function (_a) {
    var description = _a.description;
    var t = useKubevirtTranslation().t;
    var _b = useState((description === null || description === void 0 ? void 0 : description.length) <= 120), isExpanded = _b[0], setIsExpanded = _b[1];
    return (React.createElement(Stack, { className: "template-catalog-drawer-description" },
        React.createElement(StackItem, null,
            React.createElement(ExpandableSection, { contentId: "expandable-content", isDetached: true, isExpanded: true }, isExpanded ? description : description.slice(0, 120).concat('...'))),
        description.length > 120 && (React.createElement(StackItem, null,
            React.createElement(Button, { isInline: true, onClick: function () { return setIsExpanded(!isExpanded); }, variant: "link" }, isExpanded ? t('Collapse') : t('Read more'))))));
};
export default TemplateExpandableDescription;
//# sourceMappingURL=TemplateExpandableDescription.js.map