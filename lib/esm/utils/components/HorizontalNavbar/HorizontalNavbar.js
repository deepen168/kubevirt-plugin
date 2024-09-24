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
import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom-v5-compat';
import classNames from 'classnames';
import { VirtualMachineModel } from 'src/views/dashboard-extensions/utils';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Nav, NavList } from '@patternfly/react-core';
import useDynamicPages from './utils/useDynamicPages';
import { trimLastHistoryPath } from './utils/utils';
import './horizontal-nav-bar.scss';
var HorizontalNavbar = function (_a) {
    var instanceTypeExpandedSpec = _a.instanceTypeExpandedSpec, pages = _a.pages, vm = _a.vm;
    var location = useLocation();
    var params = useParams();
    var dynamicPluginPages = useDynamicPages(VirtualMachineModel);
    var allPages = useMemo(function () { return __spreadArray(__spreadArray([], pages, true), (dynamicPluginPages || []), true); }, [pages, dynamicPluginPages]);
    var paths = allPages.map(function (page) { return page.href; });
    useEffect(function () {
        var _a;
        var defaultPage = allPages.find(function (_a) {
            var href = _a.href;
            return isEmpty(href);
        });
        var initialActiveTab = allPages.find(function (_a) {
            var href = _a.href;
            return !isEmpty(href) && (location === null || location === void 0 ? void 0 : location.pathname.includes('/' + href));
        }) ||
            defaultPage;
        setActiveItem((_a = initialActiveTab === null || initialActiveTab === void 0 ? void 0 : initialActiveTab.name) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    }, [allPages, location === null || location === void 0 ? void 0 : location.pathname]);
    var _b = useState(), activeItem = _b[0], setActiveItem = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(Nav, { variant: "horizontal" },
            React.createElement(NavList, { className: "co-m-horizontal-nav__menu horizontal-nav-bar__list" }, allPages.map(function (item) {
                if (item === null || item === void 0 ? void 0 : item.isHidden)
                    return null;
                return (React.createElement(NavLink, { className: classNames('horizontal-nav-bar__menu-item', {
                        active: activeItem === item.name.toLowerCase(),
                    }), "data-test-id": "horizontal-link-".concat(item.name), id: "horizontal-pageHeader-".concat(item.name), key: item.name, onClick: function () { return setActiveItem(item.name.toLowerCase()); }, to: trimLastHistoryPath(location, paths) + item.href }, item.name));
            }))),
        React.createElement(Routes, null, allPages.map(function (page) {
            var Component = page.component;
            return (React.createElement(Route, { Component: function (props) { return (React.createElement(Component, __assign({ instanceTypeExpandedSpec: instanceTypeExpandedSpec, obj: vm, params: params }, props))); }, key: page.href, path: page.href }));
        }))));
};
export default HorizontalNavbar;
//# sourceMappingURL=HorizontalNavbar.js.map