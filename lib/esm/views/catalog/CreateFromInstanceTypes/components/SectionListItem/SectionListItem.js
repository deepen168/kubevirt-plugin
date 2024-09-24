import React from 'react';
import classNames from 'classnames';
import { ListItem, Split, SplitItem } from '@patternfly/react-core';
var SectionListItem = function (_a) {
    var children = _a.children, headerAction = _a.headerAction, headerText = _a.headerText, sectionKey = _a.sectionKey, _b = _a.sectionState, currentSection = _b[0], setCurrentSection = _b[1];
    var currentSectionClass = currentSection === sectionKey && 'current';
    return (React.createElement(ListItem, { className: "create-vm-instance-type-section", onClick: function () { return setCurrentSection(sectionKey); } },
        React.createElement(Split, { className: "create-vm-instance-type-section__add-volume-btn" },
            React.createElement(SplitItem, { className: classNames('create-vm-instance-type-section__step', currentSectionClass) }, sectionKey),
            React.createElement(SplitItem, { className: classNames('create-vm-instance-type-section__header', currentSectionClass) }, headerText),
            headerAction && (React.createElement(React.Fragment, null,
                React.createElement(SplitItem, { isFilled: true }),
                React.createElement(SplitItem, null, headerAction)))),
        children));
};
export default SectionListItem;
//# sourceMappingURL=SectionListItem.js.map