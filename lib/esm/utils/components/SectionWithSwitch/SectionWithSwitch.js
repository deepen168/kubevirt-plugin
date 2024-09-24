import React from 'react';
import classNames from 'classnames';
import NewBadge from '@kubevirt-utils/components/badges/NewBadge/NewBadge';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { PopoverPosition, Split, SplitItem, Switch } from '@patternfly/react-core';
import ExternalLink from '../ExternalLink/ExternalLink';
import './section-with-switch.scss';
var SectionWithSwitch = function (_a) {
    var children = _a.children, externalLink = _a.externalLink, helpTextIconContent = _a.helpTextIconContent, id = _a.id, inlineCheckbox = _a.inlineCheckbox, isDisabled = _a.isDisabled, maxWidth = _a.maxWidth, _b = _a.newBadge, newBadge = _b === void 0 ? false : _b, switchIsOn = _a.switchIsOn, title = _a.title, turnOnSwitch = _a.turnOnSwitch;
    var Wrapper = inlineCheckbox ? 'div' : Split;
    return (React.createElement(Wrapper, { className: "section-with-switch", id: id, style: { maxWidth: maxWidth } },
        React.createElement("div", { className: "section-with-switch__text" },
            title,
            externalLink && React.createElement(ExternalLink, { href: externalLink }),
            helpTextIconContent && (React.createElement(SplitItem, { isFilled: true },
                React.createElement(HelpTextIcon, { bodyContent: helpTextIconContent, helpIconClassName: "section-with-switch__help-text-popover", position: PopoverPosition.right }),
                newBadge && React.createElement(NewBadge, null)))),
        React.createElement(SplitItem, { className: classNames({ 'section-with-switch__inline': inlineCheckbox }) },
            children,
            ' ',
            React.createElement(Switch, { isChecked: switchIsOn, isDisabled: isDisabled, onChange: function (_, checked) { return turnOnSwitch(checked); } }))));
};
export default SectionWithSwitch;
//# sourceMappingURL=SectionWithSwitch.js.map