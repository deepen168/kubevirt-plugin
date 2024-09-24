import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ClipboardCopy } from '@patternfly/react-core';
import { clipboardCopyFunc } from '../../utils/utils';
var InlineCodeClipboardCopy = function (_a) {
    var clipboardText = _a.clipboardText;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(ClipboardCopy, { clickTip: t('Copied'), hoverTip: t('Copy to clipboard'), isCode: true, onCopy: clipboardCopyFunc, variant: "inline-compact" }, clipboardText),
        ' '));
};
export default InlineCodeClipboardCopy;
//# sourceMappingURL=InlineCodeClipboardCopy.js.map