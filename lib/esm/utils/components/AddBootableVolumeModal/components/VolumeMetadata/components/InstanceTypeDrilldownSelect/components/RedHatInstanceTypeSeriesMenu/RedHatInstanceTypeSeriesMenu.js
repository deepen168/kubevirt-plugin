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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { instanceTypeSeriesNameMapper } from '../../utils/constants';
import DrilldownMenuItem from '../DrilldownMenuItem/DrilldownMenuItem';
import RedHatInstanceTypeSeriesSizesMenuItems from './RedHatInstanceTypeSeriesSizesMenuItem';
var RedHatInstanceTypeSeriesMenu = function (_a) {
    var series = _a.series, restProps = __rest(_a, ["series"]);
    return (React.createElement(React.Fragment, null, series.map(function (_a) {
        var classAnnotation = _a.classAnnotation, seriesName = _a.seriesName, sizes = _a.sizes;
        var _b = instanceTypeSeriesNameMapper[seriesName] || {}, disabled = _b.disabled, Icon = _b.Icon, seriesLabel = _b.seriesLabel;
        return (!disabled && (React.createElement(DrilldownMenuItem, { Icon: Icon && Icon, id: seriesName, key: seriesName, label: seriesLabel || classAnnotation },
            React.createElement(RedHatInstanceTypeSeriesSizesMenuItems, __assign({ seriesName: seriesName, sizes: sizes }, restProps)))));
    })));
};
export default RedHatInstanceTypeSeriesMenu;
//# sourceMappingURL=RedHatInstanceTypeSeriesMenu.js.map