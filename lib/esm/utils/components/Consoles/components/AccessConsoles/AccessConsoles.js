import React, { Children, useState } from 'react';
import SelectToggle from '@kubevirt-utils/components/toggles/SelectToggle';
import { Select, SelectOption } from '@patternfly/react-core';
import { SelectList } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { DESKTOP_VIEWER_CONSOLE_TYPE, NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, } from '../utils/ConsoleConsts';
import { getChildTypeName, getConsoleForType } from './utils/accessConsoles';
import '@patternfly/react-styles/css/components/Consoles/AccessConsoles.css';
import './access-consoles.scss';
export var AccessConsoles = function (_a) {
    var _b;
    var children = _a.children, _c = _a.preselectedType, preselectedType = _c === void 0 ? null : _c, _d = _a.textDesktopViewerConsole, textDesktopViewerConsole = _d === void 0 ? 'Desktop viewer' : _d, _e = _a.textSelectConsoleType, textSelectConsoleType = _e === void 0 ? 'Select console type' : _e, _f = _a.textSerialConsole, textSerialConsole = _f === void 0 ? 'Serial console' : _f, _g = _a.textVncConsole, textVncConsole = _g === void 0 ? 'VNC console' : _g;
    var typeMap = (_b = {},
        _b[DESKTOP_VIEWER_CONSOLE_TYPE] = textDesktopViewerConsole,
        _b[SERIAL_CONSOLE_TYPE] = textSerialConsole,
        _b[VNC_CONSOLE_TYPE] = textVncConsole,
        _b);
    var _h = useState(preselectedType !== NONE_TYPE ? preselectedType : null), type = _h[0], setType = _h[1];
    var _j = useState(false), isOpen = _j[0], setIsOpen = _j[1];
    var selectOptions = Children.toArray(children).map(function (child) {
        var typeText = getChildTypeName(child);
        var childType = typeMap[typeText] || typeText;
        return (React.createElement(SelectOption, { id: childType, key: childType, value: childType }, childType));
    });
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement("div", { className: "kv-console" },
        React.createElement("div", { className: "pf-v5-c-console" },
            Children.toArray(children).length > 1 && (React.createElement("div", { className: css('pf-v5-c-console__actions', 'pf-u-w-0', 'access-consoles') },
                React.createElement(Select, { onSelect: function (_, selection) {
                        setType(selection);
                        setIsOpen(false);
                    }, toggle: SelectToggle({
                        id: 'pf-c-console__type-selector',
                        isExpanded: isOpen,
                        onClick: onToggle,
                        selected: type,
                        style: { minWidth: '250px' },
                    }), "aria-label": textSelectConsoleType, isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, placeholder: textSelectConsoleType, selected: type },
                    React.createElement(SelectList, null, selectOptions)))),
            type && getConsoleForType(type, children))));
};
AccessConsoles.displayName = 'AccessConsoles';
//# sourceMappingURL=AccessConsoles.js.map