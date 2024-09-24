var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useState, } from 'react';
import { useClickOutside } from '@kubevirt-utils/hooks/useClickOutside/useClickOutside';
import { Menu, MenuContent, MenuList, MenuToggle, Popper } from '@patternfly/react-core';
var ComposableDrilldownSelect = function (_a) {
    var children = _a.children, _b = _a.id, id = _b === void 0 ? 'rootMenu' : _b, isOpen = _a.isOpen, _c = _a.isScrollable, isScrollable = _c === void 0 ? false : _c, _d = _a.scrollableMenuIDs, scrollableMenuIDs = _d === void 0 ? [] : _d, setIsOpen = _a.setIsOpen, toggleLabel = _a.toggleLabel;
    var _e = useState(id), activeMenu = _e[0], setActiveMenu = _e[1];
    var _f = useState([]), menuDrilledIn = _f[0], setMenuDrilledIn = _f[1];
    var _g = useState([]), drilldownPath = _g[0], setDrilldownPath = _g[1];
    var _h = useState({}), menuHeights = _h[0], setMenuHeights = _h[1];
    var ref = useRef(null);
    var onToggleClick = function (ev) {
        ev === null || ev === void 0 ? void 0 : ev.stopPropagation(); // Stop handleClickOutside from handling
        setIsOpen(!isOpen);
        setMenuDrilledIn([]);
        setDrilldownPath([]);
        setActiveMenu(id);
    };
    var drillIn = function (_event, fromMenuId, toMenuId, pathId) {
        setMenuDrilledIn(__spreadArray(__spreadArray([], menuDrilledIn, true), [fromMenuId], false));
        setDrilldownPath(__spreadArray(__spreadArray([], drilldownPath, true), [pathId], false));
        setActiveMenu(toMenuId);
    };
    var drillOut = function (_event, toMenuId) {
        setMenuDrilledIn(menuDrilledIn.slice(0, menuDrilledIn.length - 1));
        setDrilldownPath(drilldownPath.slice(0, drilldownPath.length - 1));
        setActiveMenu(toMenuId);
    };
    var setHeight = function (menuId, height) {
        if (!menuHeights[menuId] || (menuId !== id && menuHeights[menuId] !== height)) {
            setMenuHeights(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[menuId] = height, _a)));
            });
        }
    };
    useClickOutside(ref, onToggleClick);
    return (React.createElement(Popper, { popper: React.createElement(Menu, { activeMenu: activeMenu, containsDrilldown: true, drilldownItemPath: drilldownPath, drilledInMenus: menuDrilledIn, id: id, isScrollable: isScrollable || scrollableMenuIDs.includes(activeMenu), onDrillIn: drillIn, onDrillOut: drillOut, onGetMenuHeight: setHeight, ref: ref },
            React.createElement(MenuContent, { menuHeight: "".concat(menuHeights[activeMenu], "px") },
                React.createElement(MenuList, null, children))), trigger: React.createElement(MenuToggle, { isExpanded: isOpen, isFullWidth: true, onClick: onToggleClick }, toggleLabel), appendTo: document.getElementById('tab-modal'), direction: "up", isVisible: isOpen }));
};
export default ComposableDrilldownSelect;
//# sourceMappingURL=ComposableDrilldownSelect.js.map