import React from 'react';
import NewBadge from '@kubevirt-utils/components/badges/NewBadge/NewBadge';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { PopoverPosition, Split, SplitItem, Switch } from '@patternfly/react-core';
import ExpandSection from '../../../views/clusteroverview/SettingsTab/ExpandSection/ExpandSection';
import './ExpandSectionWithSwitch.scss';
var ExpandSectionWithSwitch = function (_a) {
    var children = _a.children, helpTextIconContent = _a.helpTextIconContent, id = _a.id, isDisabled = _a.isDisabled, _b = _a.newBadge, newBadge = _b === void 0 ? false : _b, switchIsOn = _a.switchIsOn, toggleContent = _a.toggleContent, toggleText = _a.toggleText, turnOnSwitch = _a.turnOnSwitch;
    return (React.createElement(Split, { className: "expand-section-with-switch", id: id },
        React.createElement(SplitItem, null,
            React.createElement(ExpandSection, { isDisabled: isDisabled, toggleContent: toggleContent, toggleText: toggleText }, children)),
        helpTextIconContent && (React.createElement(SplitItem, { isFilled: true },
            React.createElement(HelpTextIcon, { bodyContent: helpTextIconContent, helpIconClassName: "expand-section-with-switch__help-icon", position: PopoverPosition.right }),
            newBadge && React.createElement(NewBadge, null))),
        React.createElement(SplitItem, null,
            React.createElement(Switch, { isChecked: switchIsOn, isDisabled: isDisabled, onChange: function (_, checked) { return turnOnSwitch(checked); } }))));
};
export default ExpandSectionWithSwitch;
//# sourceMappingURL=ExpandSectionWithSwitch.js.map