import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Bullseye } from '@patternfly/react-core';
var ComponentReady = function (_a) {
    var children = _a.children, isReady = _a.isReady, linkToMetrics = _a.linkToMetrics, spinner = _a.spinner, text = _a.text;
    var t = useKubevirtTranslation().t;
    var renderText = text || t('No data available');
    return isReady ? (React.createElement(React.Fragment, null, children)) : (React.createElement(Bullseye, { className: "ComponentReady" },
        !spinner && !linkToMetrics && React.createElement(MutedTextSpan, { text: renderText }),
        spinner && React.createElement(Loading, null),
        linkToMetrics && !spinner && React.createElement(Link, { to: linkToMetrics }, renderText)));
};
export default ComponentReady;
//# sourceMappingURL=ComponentReady.js.map