import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, clipboardCopyFunc, Tooltip } from '@patternfly/react-core';
import { CopyIcon } from '@patternfly/react-icons';
import './SimpleCopyButton.scss';
var SimpleCopyButton = function (_a) {
    var textToCopy = _a.textToCopy;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), copiedState = _b[0], setCopiedState = _b[1];
    var handleClick = function (event) {
        clipboardCopyFunc(event, textToCopy);
        setCopiedState(true);
    };
    return (React.createElement(Tooltip, { aria: "none", "aria-live": "polite", content: copiedState ? React.createElement("div", null, t('Copied')) : React.createElement("div", null, t('Copy to clipboard')), entryDelay: 300, exitDelay: 0, maxWidth: "150px", onTooltipHidden: function () { return setCopiedState(false); }, position: "top", trigger: "mouseenter focus click" },
        React.createElement(Button, { "aria-label": "Copy text to clipboard", icon: React.createElement(CopyIcon, null), id: "kubevirt-simple-copy-button__button", onClick: handleClick })));
};
export default SimpleCopyButton;
//# sourceMappingURL=SimpleCopyButton.js.map