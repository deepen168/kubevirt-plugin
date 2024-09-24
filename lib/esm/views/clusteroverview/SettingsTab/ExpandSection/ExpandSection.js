import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ExpandableSection } from '@patternfly/react-core';
import './ExpandSection.scss';
var ExpandSection = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, _c = _a.isIndented, isIndented = _c === void 0 ? true : _c, _d = _a.toggleContent, toggleContent = _d === void 0 ? null : _d, _e = _a.toggleText, toggleText = _e === void 0 ? '' : _e;
    var _f = useState(false), isExpanded = _f[0], setIsExpanded = _f[1];
    useEffect(function () {
        if (isDisabled)
            setIsExpanded(false);
    }, [isDisabled, setIsExpanded]);
    var handleToggle = function (expanded) { return (isDisabled ? null : setIsExpanded(expanded)); };
    return (React.createElement(ExpandableSection, { className: classNames(className, { 'expand-section__disabled': isDisabled }, 'ExpandSection'), isExpanded: isExpanded, isIndented: isIndented, onToggle: function (_event, expanded) { return handleToggle(expanded); }, toggleContent: toggleContent, toggleText: toggleText }, children));
};
export default ExpandSection;
//# sourceMappingURL=ExpandSection.js.map