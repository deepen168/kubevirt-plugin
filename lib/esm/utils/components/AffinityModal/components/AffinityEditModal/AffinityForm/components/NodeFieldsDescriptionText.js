import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
var NodeFieldsDescriptionText = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Field selectors let you select Nodes based on the value of one or more resource fields.')),
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Note that for Node field expressions, entering a full path is required in the "Key" field (e.g. "metadata.name: value").')),
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Some fields may not be supported.'))));
};
export default NodeFieldsDescriptionText;
//# sourceMappingURL=NodeFieldsDescriptionText.js.map