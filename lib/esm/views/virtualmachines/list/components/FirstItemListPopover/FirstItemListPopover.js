import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { Button, ButtonVariant, ClipboardCopy, ClipboardCopyVariant, Popover, PopoverPosition, } from '@patternfly/react-core';
var FirstItemListPopover = function (_a) {
    var _b, _c;
    var className = _a.className, headerContent = _a.headerContent, includeCopyFirstItem = _a.includeCopyFirstItem, items = _a.items;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: className },
        React.createElement("div", null, (items === null || items === void 0 ? void 0 : items[0]) && includeCopyFirstItem ? (React.createElement(ClipboardCopy, { clickTip: t('Copied'), hoverTip: t('Copy to clipboard'), isCode: true, variant: ClipboardCopyVariant.inlineCompact }, (_b = items === null || items === void 0 ? void 0 : items[0]) === null || _b === void 0 ? void 0 : _b.ip)) : (((_c = items === null || items === void 0 ? void 0 : items[0]) === null || _c === void 0 ? void 0 : _c.ip) || NO_DATA_DASH)),
        (items === null || items === void 0 ? void 0 : items.length) > 1 && (React.createElement(Popover, { bodyContent: items.map(function (_a) {
                var interfaceName = _a.interfaceName, ip = _a.ip;
                return (React.createElement("div", { key: ip },
                    interfaceName,
                    ": ",
                    ip));
            }), hasAutoWidth: true, headerContent: headerContent, position: PopoverPosition.top },
            React.createElement(Button, { variant: ButtonVariant.link }, "+".concat(items.length - 1, " more"))))));
};
FirstItemListPopover.defaultProps = {
    className: '',
    headerContent: '',
};
export default FirstItemListPopover;
//# sourceMappingURL=FirstItemListPopover.js.map