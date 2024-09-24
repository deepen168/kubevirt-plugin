import React, { useState } from 'react';
import DropdownToggle from '@kubevirt-utils/components/toggles/DropdownToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, Dropdown, DropdownItem, DropdownList, } from '@patternfly/react-core';
import { PasteIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Consoles/VncConsole';
export var VncConsoleActions = function (_a) {
    var _b = _a.additionalButtons, additionalButtons = _b === void 0 ? [] : _b, customButtons = _a.customButtons, onDisconnect = _a.onDisconnect, onInjectTextFromClipboard = _a.onInjectTextFromClipboard, textDisconnect = _a.textDisconnect, textSendShortcut = _a.textSendShortcut;
    var t = useKubevirtTranslation().t;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: css(styles.consoleActionsVnc) },
            additionalButtons,
            React.createElement(Dropdown, { toggle: DropdownToggle({
                    children: React.createElement(React.Fragment, null, textSendShortcut || t('Send key')),
                    id: 'pf-c-console__actions-vnc-toggle-id',
                    isExpanded: isOpen,
                    onClick: onToggle,
                }), isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, onSelect: function () { return setIsOpen(false); } },
                React.createElement(DropdownList, null, customButtons === null || customButtons === void 0 ? void 0 : customButtons.map(function (_a) {
                    var onClick = _a.onClick, text = _a.text;
                    return (React.createElement(DropdownItem, { key: text, onClick: onClick }, text));
                }))),
            React.createElement(Button, { icon: React.createElement("span", null,
                    React.createElement(PasteIcon, null),
                    " ",
                    t('Paste')), className: "vnc-paste-button", onClick: onInjectTextFromClipboard, variant: ButtonVariant.link })),
        React.createElement(Button, { className: "vnc-actions-disconnect-button", onClick: onDisconnect, variant: ButtonVariant.secondary }, textDisconnect || t('Disconnect'))));
};
export default VncConsoleActions;
//# sourceMappingURL=VncConsoleActions.js.map